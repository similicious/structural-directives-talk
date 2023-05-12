import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFooDirective } from './add-foo.directive';
import { AddFooDemoComponent } from './add-foo-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddFooDirective, AddFooDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AddFooDemoComponent }]),
  ],
})
export class AddFooModule {}
