import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState, LocalStorageService, ROUTE_ANIMATIONS_ELEMENTS, selectSettingsLanguage } from '../../core/core.module';
import { TestingService, Contents } from '../services/testing.service';
import { Observable, Observer } from "rxjs";
import { Store, select } from '@ngrx/store';
import { MatSelectChange } from '@angular/material/select';
import { actionSettingsChangeLanguage } from '../../core/settings/settings.actions';


@Component({
  selector: 'ROI-djdatarender',
  templateUrl: './djdatarender.component.html',
  styleUrls: ['./djdatarender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DjdatarenderComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  pandas = 'assets/icons/pandas_mark.svg'
  tableau = 'assets/icons/tableau_mark.png'
  excel = 'assets/icons/excel.png'
  powerbi = 'assets/icons/powerbi.png'
  python = 'assets/icons/python.png'
  r = 'assets/icons/r.png'
  angular = 'assets/icons/angular.png'
  hero = 'assets/tableau/tableau_2018.2_auto_mobile_layout_0.jpg'
  image1 = 'assets/img3.jpg'

  languages = ['en', 'ar'];
  contents: Observable<any> | undefined;
  language$: Observable<string> | undefined;

  constructor (
    private testingService: TestingService,
    private store: Store<AppState>,
    private storageService: LocalStorageService
    ) {}


  ngOnInit() {
    this.loadContentsData();
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
  }

  loadContentsData(value: string = 'en'){
    // this.contents = this.testingService.getContentAll();
    this.contents = this.testingService.getContent(value)
  }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: event.value })
    );
    this.loadContentsData(event.value);
    console.log(this.contents)
  }

}
