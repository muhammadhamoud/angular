import { ChangeDetectionStrategy, Component, Injectable, Input } from '@angular/core';
import { formatNumber } from '@angular/common';
import { single } from './bans.data'

 // define a color scheme
import { Color, ScaleType } from '@swimlane/ngx-charts';
const customColorScheme: Color[] = [
  {
    name: 'custom-color',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#fd7e14']
  }
];

@Injectable()
@Component({
  selector: 'ROI-bans',
  templateUrl: './bans.component.html',
  styleUrls: ['./bans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BansComponent {
  colorScheme: Color = customColorScheme[0];
  single: any[]=[];
  view: [number, number] | undefined;
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = true;
  
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Months';
  showYAxisLabel = true;
  yAxisLabel = 'Revenue';
  gradient = false;
  showDataLabel = true;
  @Input() value: number | any;

  constructor() {
    Object.assign(this, { single });
  }

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.618, 400];
  }

  onSelect(event: any) {
    console.log(event);
  }
}
