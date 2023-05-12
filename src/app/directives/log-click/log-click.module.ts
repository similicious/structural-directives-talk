import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogClickDirective } from './log-click.directive';
import { LogClickDemoComponent } from './log-click-demo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LogClickDirective, LogClickDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LogClickDemoComponent }]),
  ],
})
export class LogClickModule {}
