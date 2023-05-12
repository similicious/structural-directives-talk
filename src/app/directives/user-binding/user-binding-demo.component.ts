import { Component } from '@angular/core';

@Component({
  selector: 'app-user-binding-demo',
  template: `<h1 class="is-size-3">UserBindingDirective</h1>
    <app-demo-table appUserBinding></app-demo-table> `,
})
export class UserBindingDemoComponent {}
