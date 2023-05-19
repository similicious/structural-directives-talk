import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignDirective } from './assign.directive';
import { AssignDemoComponent } from './assign-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AssignDirective, AssignDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AssignDemoComponent }]),
  ],
})
export class AssignModule {}
