import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AnalyticsService } from './shared/analytics/analytics';
import { NavigationFocusService } from './shared/navigation-focus/navigation-focus.service';
import { Subscription } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/navbar/navbar';
import { CookiePopup } from './shared/cookie-popup/cookie-popup';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'roi-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterOutlet, NavBar, CookiePopup],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private subscriptions = new Subscription();

  constructor(analytics: AnalyticsService, navigationFocusService: NavigationFocusService) {
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
