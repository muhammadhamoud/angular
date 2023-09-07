import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';
import { OurServiceItems } from '../data/ourservices.data';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectSettingsLanguage,
  AppState
} from '../../core/core.module';

@Component({
  selector: 'ROI-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurservicesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  language$: Observable<string> | undefined;
  constructor(
    private store: Store<AppState>,
    public ourservices: OurServiceItems
  ) {
    // this.updateMarkdownFile();
  }
  ngOnInit(): void {
  this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }
}
