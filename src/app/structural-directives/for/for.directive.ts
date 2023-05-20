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
export class ForDirective implements OnInit {
  @Input('appForOf')
  items: any[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
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
}
