import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {single} from './gauge-chart.data';

// define a color scheme
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';

const customColorScheme: Color[] = [
  {
    name: 'custom-color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3284ff', '#ff3424', '#ffbb00', '#26b14c', '#00bcd4', '#8d541e', '#1d65a6', '#de830e', '#9c27b0', '#118c8b']
  }
];

@Component({
  selector: 'ROI-gauge-chart',
  templateUrl: './gauge-chart.component.html',
  styleUrls: ['./gauge-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GaugeChartComponent {

  colorScheme: Color = customColorScheme[0];
  single: any[] = [];
  
  view: [number, number] | undefined;
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = true;

  legend: boolean = true;
  showLegend: boolean = true;
  legendTitle = 'Sales by Countries';
  legendPosition = LegendPosition.Right;

  constructor() {
    Object.assign(this, { single });
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.618, 400];
  }
  
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
