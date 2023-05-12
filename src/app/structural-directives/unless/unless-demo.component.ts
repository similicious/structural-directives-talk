import { Component } from '@angular/core';

@Component({
  selector: 'app-unless-demo',
  template: `
    <h1 class="is-size-3">UnlessDirective</h1>
    <ng-template appUnless [unless]="falseCondition">
      <p>Will be rendered</p>
    </ng-template>
    <ng-template appUnless [unless]="trueCondition">
      <p>Will not be rendered</p>
    </ng-template>
  `,
})
export class UnlessDemoComponent {
  falseCondition = false;
  trueCondition = true;
}
