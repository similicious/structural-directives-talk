import { Component } from '@angular/core';

@Component({
  selector: 'app-log-click-demo',
  template: `
    <h1 class="is-size-3">LogClickDirective</h1>
    <button class="button is-success" appLogClick emoji="💪">Click me</button>
  `,
})
export class LogClickDemoComponent {}
