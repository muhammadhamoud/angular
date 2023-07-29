import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { multi } from './line-chart.data';


// define a color scheme
import { Color, ScaleType } from '@swimlane/ngx-charts';
const customColorScheme: Color[] = [
  {
    name: 'custom-color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#3284ff', '#ff3424', '#ffbb00', '#26b14c', '#00bcd4', '#8d541e', '#1d65a6', '#de830e', '#9c27b0', '#118c8b']
  }
];

@Component({
  selector: 'ROI-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineChartComponent {
  multi: any[] | undefined;

  view: [number, number] | undefined;
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = true;

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Month';
  yAxisLabel: string = 'Value';
  timeline: boolean = true;
  showGridLines: boolean = false;
  legendPosition: string= 'below';
  tooltipDisabled: boolean =false;
  labels: boolean =true;
  gradient: boolean =false;


  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  // };
  colorScheme: Color = customColorScheme[0];

  constructor() {
    Object.assign(this, { multi });
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