import { ChangeDetectionStrategy, Component } from '@angular/core';

import chartGroups from '../chartTypes';
import { single } from './number-card.data';

import { Color, ScaleType } from '@swimlane/ngx-charts';

// define a color scheme
const customColorScheme: Color[] = [
  {
    name: 'custom-color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3284ff', '#ff3424', '#ffbb00', '#26b14c', '#00bcd4', '#8d541e', '#1d65a6', '#de830e', '#9c27b0', '#118c8b']
  }
];

@Component({
  selector: 'ROI-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberCardComponent {
  multi: any[] | undefined;
  single: any[] | undefined;
  fiscalYearReport: any[] | undefined;
  dateData: any[] | undefined;
  dateDataWithRange: any[] | undefined;
  calendarData: any[] | undefined;
  statusData: any[] | undefined;
  sparklineData: any[] | undefined;
  timelineFilterBarData: any[] | undefined;
  realTimeData: boolean = false;
  view: [number, number] =[700, 300];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  chartType: string = 'number-card';
  animations: boolean = true;
  colorScheme: Color = customColorScheme[0];


  constructor() {
    Object.assign(this, { single });

}

onResize(event: any) {
  this.view = [event.target.innerWidth / 1.618, 400];
}
select(data: any) {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}

activate(data: any) {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

deactivate(data: any) {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}


}
