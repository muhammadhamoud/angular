import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';
import { OurServiceItems } from '../data/ourservices.data';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectSettingsLanguage,
  AppState
} from '../../core/core.module';

@Component({
  selector: 'ROI-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // ourservices: OurServices[] = ourservices;
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
