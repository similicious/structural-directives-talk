import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-table',
  template: `
    <ul>
      <li *ngFor="let row of data">{{ row }}</li>
    </ul>
  `,
})
export class DemoTableComponent {
  @Input()
  data?: string[];
}
