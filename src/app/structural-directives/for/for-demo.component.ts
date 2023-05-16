import { Component } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
})
export class ForDemoComponent {
  users = [
    { firstName: 'Max', lastName: 'Musermann' },
    { firstName: 'Jane', lastName: 'Doe' },
  ];
}
