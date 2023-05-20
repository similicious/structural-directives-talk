import { Directive, TemplateRef } from '@angular/core';
import { HeaderService } from './header.service';

@Directive({
  selector: 'ng-template[appHeader]',
})
export class HeaderDirective {
  constructor(
    private headerSerivce: HeaderService,
    private templatRef: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.headerSerivce.setHeaderTemplate(this.templatRef);
  }
}
