import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';
import { ourservices, OurServices } from '../data/ourservices.data';
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
  ourservices: OurServices[] = ourservices;
  language$: Observable<string> | undefined;
  constructor(
    private store: Store<AppState>,
  ) {
    // this.updateMarkdownFile();
  }
  ngOnInit(): void {
  this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }
}
