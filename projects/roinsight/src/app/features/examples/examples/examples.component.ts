import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'ROI-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean> | undefined;

  examples = [
    { link: 'todos', label: 'ROI.examples.menu.todos' },
    { link: 'stock-market', label: 'ROI.examples.menu.stocks' },
    { link: 'theming', label: 'ROI.examples.menu.theming' },
    { link: 'crud', label: 'ROI.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'ROI.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'ROI.examples.menu.form' },
    { link: 'notifications', label: 'ROI.examples.menu.notifications' },
    { link: 'elements', label: 'ROI.examples.menu.elements' },
    { link: 'authenticated', label: 'ROI.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
