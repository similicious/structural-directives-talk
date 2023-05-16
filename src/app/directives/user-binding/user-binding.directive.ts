import { Directive, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DemoTableComponent } from './demo-table.component';
@Directive({
  selector: 'app-demo-table[appUserBinding]',
})
export class UserBindingDirective implements OnInit {
  constructor(
    private userService: UserService,
    private tableComponent: DemoTableComponent
  ) {}

  ngOnInit() {
    this.tableComponent.data = this.userService
      .getUsers()
      // heavy data transformation here
      .map((user) => `${user.firstName} ${user.lastName}`);
  }
}
