import {
  Directive,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Directive({
  selector: 'ng-template[appAssign]',
})
export class AssignDirective<TItem> {
  @Input('appAssign')
  items: TItem[] = [];

  @Input()
  assignedItems: TItem[] = [];

  @Output()
  assignedItemsChange = new EventEmitter<TItem[]>();

  private items$ = new BehaviorSubject(this.items);
  private assignedItems$ = new BehaviorSubject(this.assignedItems);
  private unassignedItems$ = combineLatest([
    this.items$,
    this.assignedItems$,
  ]).pipe(
    map(([items, assignedItems]) =>
      items.filter((item) => !assignedItems.includes(item))
    )
  );

  constructor(
    private templateRef: TemplateRef<AssignContext<TItem>>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['items']) {
      this.items$.next(this.items);
    }

    if (changes['assignedItems']) {
      this.assignedItems$.next(this.assignedItems);
    }
  }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: this.unassignedItems$,
      move: (item) => {
        const assignedItems = [...this.assignedItems, item];
        this.assignedItemsChange.next(assignedItems);
      },
    });
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: this.assignedItems$,
      move: (item) => {
        const assignedItems = this.assignedItems.filter(
          (itemToFilter) => itemToFilter !== item
        );
        this.assignedItemsChange.next(assignedItems);
      },
    });
  }

  static ngTemplateContextGuard<TItem>(
    dir: AssignDirective<TItem>,
    ctx: AssignContext<TItem> | any
  ): ctx is AssignContext<TItem> {
    return true;
  }
}

interface AssignContext<TItem> {
  $implicit: Observable<TItem[]>;
  move: (item: TItem) => void;
}
