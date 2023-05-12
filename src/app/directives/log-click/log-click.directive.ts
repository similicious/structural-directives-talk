import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLogClick]',
})
export class LogClickDirective {
  @Input('emoji')
  emoji = `✅`;

  @HostListener('click')
  onClick() {
    console.log(`${this.emoji} appLogClick logged`);
  }
}
