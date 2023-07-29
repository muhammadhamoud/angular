import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, LocalStorageService, ROUTE_ANIMATIONS_ELEMENTS, selectSettingsLanguage } from '../../core/core.module';
import { TestingService, Contents } from '../services/testing.service';
import { Observable, Observer } from "rxjs";
import { MatSelectChange } from '@angular/material/select';
import { actionSettingsChangeLanguage } from '../../core/settings/settings.actions';
import { GuideItems } from './guide-items/guide-items'
import { Store, select } from '@ngrx/store';

const TOP_COMPONENTS = ['datepicker', 'input', 'slide-toggle', 'slider', 'button'];

@Component({
  selector: 'ROI-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  language$: Observable<string> | undefined;

  constructor (
    // public _componentPageTitle: ComponentPageTitle,
    public guideItems: GuideItems,
    // private store: Store<AppState>
  ) {}

  ngOnInit() {
    // this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }

  getTopComponents(): string[] {
    return TOP_COMPONENTS;
  }
}
