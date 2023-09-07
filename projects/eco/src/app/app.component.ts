import { Component, HostBinding, Inject, OnInit, Optional, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from './core/local-storage/local-storage.service';
import { AnalyticsService } from './core/analytics/analytics';
import { NavigationFocusService } from './pages/services/navigation-focus.service';

import {map, pairwise, startWith} from 'rxjs/operators';
import { SessionFlowService } from './management/services/session-flow/session-flow.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

@HostListener('click', ['$event']) onClick(e: any){
   this.sessionFlow.addUserClick(e);
}

  private subscriptions = new Subscription();
  title = 'eco';
  
  constructor(
    private storageService: LocalStorageService,
    analytics: AnalyticsService, 
    navigationFocusService: NavigationFocusService,
    private sessionFlow: SessionFlowService
  ) {
    this.subscriptions.add(
      navigationFocusService.navigationEndEvents
        .pipe(
          map(e => e.urlAfterRedirects),
          startWith(''),
          pairwise()
        )
        .subscribe(([fromUrl, toUrl]) => {
          // We want to reset the scroll position on navigation except when navigating within
          // the documentation for a single component.
          if (!navigationFocusService.isNavigationWithinComponentView(fromUrl, toUrl)) {
            resetScrollPosition();
          }
          analytics.locationChanged(toUrl);
        })
    );
  }

  // ngOnInit(): void {
  //   this.storageService.testLocalStorage();
  // }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
