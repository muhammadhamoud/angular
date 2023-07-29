import { ChangeDetectionStrategy, Component } from '@angular/core';
import { formatLabel, escapeLabel } from '@swimlane/ngx-charts'

import { single } from './data'

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
  selector: 'ROI-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedPieChartComponent {

  colorScheme: Color = customColorScheme[0];
  single: any[]=[];
  view: [number, number] =  [700, 300];
  width: number = 700;
  height: number = 300;

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    legendTitle = 'Legend';
    // legendPosition = LegendPosition.Right;
    showXAxisLabel = true;
    tooltipDisabled = false;
    showText = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'GDP Per Capita';
    showGridLines = true;
    innerPadding = '10%';
    barPadding = 8;
    groupPadding = 16;
    roundDomains = false;
    maxRadius = 10;
    minRadius = 3;
    showSeriesOnHover = true;
    roundEdges: boolean = true;
    animations: boolean = true;
    xScaleMin: any;
    xScaleMax: any;
    // yScaleMin: number;
    // yScaleMax: number;
    showDataLabel: boolean = false;
    noBarWhenZero: boolean = true;
    trimXAxisTicks: boolean = true;
    trimYAxisTicks: boolean = true;
    rotateXAxisTicks: boolean = true;
    maxXAxisTickLength: number = 16;
    maxYAxisTickLength: number = 16;
    strokeColor: string = '#FFFFFF';
    strokeWidth: number = 2;

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

  valueFormatting(value: number): string {
    return `${Math.round(value).toLocaleString()} €`;
  }

  // pieTooltipText({ data}) {
  //   // const label = formatLabel(data.name);
  //   // const val = formatLabel(data.value);

  //   // return `
  //   //   <span class="tooltip-label">${escapeLabel(label)}</span>
  //   //   <span class="tooltip-val">$${val}</span>
  //   // `;
  // }

}
