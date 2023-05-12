import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForDemoComponent } from './for-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ForDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ForDemoComponent }]),
  ],
})
export class ForModule {}
