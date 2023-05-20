import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header-target',
  template: `
    <h1 class="is-size-3">Inside HeaderTargetComponent</h1>
    <ng-container *ngIf="headerService.header$ | async as header">
      <ng-container *ngTemplateOutlet="header"></ng-container
    ></ng-container>
  `,
})
export class HeaderTargetComponent {
  constructor(public headerService: HeaderService) {}
}
