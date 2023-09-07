import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private headerButtonsVisibility = new BehaviorSubject(true);

  showHeaderButtons = this.headerButtonsVisibility.asObservable();

  constructor() { }

  setHeaderButtonsVisibility(visible: boolean) {
    this.headerButtonsVisibility.next(visible);
  }
}