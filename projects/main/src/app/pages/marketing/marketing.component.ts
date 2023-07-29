import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../core/core.module';
import { Marketing, marketing } from '../data/marketing.data';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'ROI-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketingComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  marketing: Marketing[] = marketing;
  constructor() {}
  ngOnInit(): void {}
}
