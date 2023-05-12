import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAddFoo]',
})
export class AddFooDirective {
  @HostBinding('class.foo')
  addFoo = true;
}
