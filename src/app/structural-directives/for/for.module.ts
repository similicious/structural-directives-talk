import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForDemoComponent } from './for-demo.component';
import { RouterModule } from '@angular/router';
import { ForDirective } from './for.directive';

@NgModule({
  declarations: [ForDemoComponent, ForDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ForDemoComponent }]),
  ],
})
export class ForModule {}
