import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  unless: boolean = false;

  ngOnInit(): void {
    if (!this.unless) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
