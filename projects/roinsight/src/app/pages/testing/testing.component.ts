import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, LocalStorageService, ROUTE_ANIMATIONS_ELEMENTS, selectSettingsLanguage } from 'src/app/core/core.module';
import { TestingService, Contents } from '../testing.service';
import { Observable, Observer } from "rxjs";
import { Store, select } from '@ngrx/store';
import { MatSelectChange } from '@angular/material/select';
import { actionSettingsChangeLanguage } from 'src/app/core/settings/settings.actions';

@Component({
  selector: 'ROI-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingComponent  {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  
}
