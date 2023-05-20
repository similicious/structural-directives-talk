import { Component } from '@angular/core';

@Component({
  selector: 'app-assign-demo',
  templateUrl: './assign-demo.component.html',
  styleUrls: ['./assign-demo.component.scss'],
})
export class AssignDemoComponent {
  users = [
    { firstName: 'Max', lastName: 'Mustermann' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Alex', lastName: 'Kaufmann' },
    { firstName: 'Theodor', lastName: 'Schmidt' },
  ];

  assignedUsers = [this.users[0]];
}
