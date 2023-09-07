import browser from 'browser-detect';
import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { environment as env } from '../../environments/environment';
// import {MatChipsModule} from '@angular/material/chips';

import {
  authLogin,
  authLogout,
  routeAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectAutoNightMode,
  selectSettingsLanguage,
  selectNightTheme,
  selectEffectiveTheme,
  AppState
} from '../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage,
  actionSettingsChangeDarkTheme
} from '../core/settings/settings.actions';
import { selectChangeDarkTheme } from '../core/settings/settings.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'ROI-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = 'assets/logo.png';
  // 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he',
  languages = ['en', 'ar'];
  
  navigation = [
    { link: 'home', label: 'ROI.menu.home' },
    { link: 'about', label: 'ROI.menu.about' },
    { link: 'features', label: 'ROI.menu.features' },
    { link: 'products', label: 'ROI.menu.products' },
    { link: 'contactus', label: 'ROI.menu.contactus' },
    // { link: 'charts', label: 'Charts' },
    // { link: 'pages', label: 'ROI.menu.pages' },
    // { link: 'auth', label: 'ROI.menu.auth' },
    // { link: 'test', label: 'Test Me' },
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'ROI.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean> | undefined;
  stickyHeader$: Observable<boolean> | undefined;
  language$: Observable<string> | undefined;
  theme$: Observable<string> | undefined;
  autoNightMode$: Observable<boolean> | undefined;
  isDarkTheme$: Observable<boolean> | undefined;
  nightTheme$: Observable<string> | undefined;
  isDarkTheme_ : boolean = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private storageService: LocalStorageService
  ) {}

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name || '');
  }

  onLogconsol() {
    console.log('test');
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (AppComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.autoNightMode$ = this.store.pipe(select(selectAutoNightMode));
    this.nightTheme$ = this.store.pipe(select(selectNightTheme));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.isDarkTheme$ = this.store.pipe(select(selectChangeDarkTheme));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));

  }

  onLoginClick() {
    this.router.navigate(['auth', 'login']);
    this.store.dispatch(authLogin());
  }

  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  onLanguageSelect(event: MatSelectChange) {
    this.store.dispatch(
      actionSettingsChangeLanguage({ language: event.value })
    );
  }
  
  onChangeDarkTheme() {
    this.store.dispatch(
      actionSettingsChangeDarkTheme({ isDarkTheme: this.isDarkTheme_ = !this.isDarkTheme_})
    );
  }

  onProfileClick () {
    console.log('Profile Clicked')
  }
}
