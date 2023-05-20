import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDemoComponent } from './header-demo.component';
import { HeaderDirective } from './header.directive';
import { RouterModule } from '@angular/router';
import { HeaderTargetComponent } from './header-target.component';

@NgModule({
  declarations: [HeaderDemoComponent, HeaderDirective, HeaderTargetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HeaderDemoComponent }]),
  ],
})
export class HeaderModule {}
