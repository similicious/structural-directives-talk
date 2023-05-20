import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers() {
    return [
      { firstName: 'Max', lastName: 'Mustermann' },
      { firstName: 'Jane', lastName: 'Doe' },
    ];
  }
}
