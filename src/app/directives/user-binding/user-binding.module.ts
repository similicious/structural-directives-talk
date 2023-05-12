import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBindingDirective } from './user-binding.directive';
import { DemoTableComponent } from './demo-table.component';
import { UserBindingDemoComponent } from './user-binding-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserBindingDirective,
    DemoTableComponent,
    UserBindingDemoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserBindingDemoComponent }]),
  ],
})
export class UserBindingModule {}
