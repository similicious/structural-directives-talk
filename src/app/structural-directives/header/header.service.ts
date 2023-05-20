import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private headerSub = new BehaviorSubject<TemplateRef<any> | null>(null);
  header$ = this.headerSub.asObservable();

  constructor() {}

  setHeaderTemplate(header: TemplateRef<any>) {
    this.headerSub.next(header);
  }
}
