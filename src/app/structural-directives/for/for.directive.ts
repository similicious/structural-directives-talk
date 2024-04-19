import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: 'ng-template[appFor]',
})
export class ForDirective<TItem> implements OnInit {
  @Input('appForOf')
  items: TItem[] = [];

  constructor(
    private templateRef: TemplateRef<AppForContext<TItem>>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
    this.items.forEach((item, index) => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index,
        first: index === 0,
        last: index + 1 === this.items.length,
      });
    });
  }
  static ngTemplateContextGuard<TItem>(
    directive: ForDirective<TItem>,
    context: unknown
  ): context is AppForContext<TItem> {
    return true;
  }
}

interface AppForContext<TItem> {
  $implicit: TItem;
  index: number;
  first: boolean;
  last: boolean;
}
