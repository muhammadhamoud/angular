import { ChangeDetectionStrategy, Component } from '@angular/core';

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



function multiFormat(value: number) {
  if (value < 1000) return `${value.toFixed(2)}ms`;
  value /= 1000;
  if (value < 60) return `${value.toFixed(2)}s`;
  value /= 60;
  if (value < 60) return `${value.toFixed(2)}mins`;
  value /= 60;
  return `${value.toFixed(2)}hrs`;
};

export function formatLabel(label: any): string {
  if (label instanceof Date) {
    label = label.toLocaleDateString();
  } else {
    label = label.toLocaleString();
  }

  return label;
}

export function escapeLabel(label: any): string {
  return label.toLocaleString().replace(/[&'`"<>]/g, (match: string | number) => {
    return {
      '&': '&amp;',
      // tslint:disable-next-line: quotemark
      "'": '&#x27;',
      '`': '&#x60;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    }[match];
  });
}


@Component({
  selector: 'ROI-number-cards-status',
  templateUrl: './number-cards-status.component.html',
  styleUrls: ['./number-cards-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberCardsStatusComponent {
  statusData: any[];
  view: [number, number] = [700, 300];
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  chartType: string = 'status-demo';
  // demos
  totalSales = 0;
  salePrice = 100;
  personnelCost = 100;
  colorScheme: Color = customColorScheme[0];
  animations: boolean = true;


  constructor(public location: Location) {
    // this.mathFunction = this.getFunction();

    Object.assign(this, {
      // single,
      // multi,
      // countries,
      // chartGroups,
      // colorSets,
      // graph: generateGraph(50),
      // boxData,
      // bubble,
      // plotData: this.generatePlotData(),
      // treemap,
      // bubbleDemoData,
      // fiscalYearReport
    });

    // interactive drill down demos

    // this.dateData = generateData(5, false);
    // this.dateDataWithRange = generateData(2, true);
    // this.setColorScheme('cool');
    // this.calendarData = this.getCalendarData();
    this.statusData = this.getStatusData();
    // this.sparklineData = generateData(1, false, 30);
    // this.timelineFilterBarData = timelineFilterBarData();
  }


  applyDimensions() {
    this.view = [this.width, this.height];
  }

  toggleFitContainer() {
    if (this.fitContainer) {
      // this.view = undefined;
    } else {
      this.applyDimensions();
    }
  }

  dollarValueFormat(c: { value: { toLocaleString: () => any; }; }): string {
    return `$${c.value.toLocaleString()}`;
  }

  getStatusData() {
    const sales = Math.round(1e4 * Math.random());
    const dur = 36e5 * Math.random();
    return this.calcStatusData(sales, dur);
  }

  calcStatusData(sales = this.statusData[0].value, dur = this.statusData[2].value) {
    const ret = sales * this.salePrice;
    const cost = ((sales * dur) / 60 / 60 / 1000) * this.personnelCost;
    const ROI = (ret - cost) / cost;
    return [
      {
        name: 'Sales',
        value: sales
      },
      {
        name: 'Gross',
        value: ret,
        extra: { format: 'currency' }
      },
      {
        name: 'Avg. Time',
        value: dur,
        extra: { format: 'time' }
      },
      {
        name: 'Cost',
        value: cost,
        extra: { format: 'currency' }
      },
      {
        name: 'ROI',
        value: ROI,
        extra: { format: 'percent' }
      }
    ];
  }

  statusValueFormat(c: { data: { extra: { format: any; }; }; value: number; }): string {
    switch (c.data.extra ? c.data.extra.format : '') {
      case 'currency':
        return `$${Math.round(c.value).toLocaleString()}`;
      case 'time':
        return multiFormat(c.value);
      case 'percent':
        return `${Math.round(c.value * 100)}%`;
      default:
        return c.value.toLocaleString();
    }
  }

  valueFormatting(value: number): string {
    return `${Math.round(value).toLocaleString()} €`;
  }

  currencyFormatting(value: number) {
    return `$${Math.round(value).toLocaleString()}`;
  }

  gdpLabelFormatting(c: { label: any; }) {
    return `${escapeLabel(c.label)}<br/><small class="number-card-label">GDP Per Capita</small>`;
  }

  statusLabelFormat(c: { label: any; }): string {
    return `${c.label}<br/><small class="number-card-label">This week</small>`;
  }


}
