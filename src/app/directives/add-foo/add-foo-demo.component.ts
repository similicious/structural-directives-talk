import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-add-foo-demo',
  template: ` <h1 class="is-size-3">AddFooDirective</h1>
    <div appAddFoo>AddFooDirective is on here</div>`,
})
export class AddFooDemoComponent {}
