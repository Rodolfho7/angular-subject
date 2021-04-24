import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mainState } from '../entities/main-state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  subject = new Subject<mainState>();
  constructor() {}

  updateData(data: mainState): void {
    this.subject.next(data);
  }

  readData(): Observable<mainState> {
    return this.subject.asObservable();
  }
}
