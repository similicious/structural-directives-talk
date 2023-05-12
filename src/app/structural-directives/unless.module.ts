import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnlessDirective } from './unless.directive';
import { UnlessDemoComponent } from './unless-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UnlessDirective, UnlessDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UnlessDemoComponent }]),
  ],
})
export class UnlessModule {}
