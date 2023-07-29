import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'ROI-linecsv-chart',
  template: `
    <ngx-charts-line-chart
      [view]="[700, 400]"
      [scheme]="colorScheme"
      [results]="single"
      [xAxis]="true"
      [yAxis]="true"
      [legend]="true"
      [showXAxisLabel]="true"
      [showYAxisLabel]="true"
      xAxisLabel="Product Name"
      yAxisLabel="Sales Amount"
    ></ngx-charts-line-chart>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LineCsvComponent {
  colorScheme: Color = customColorScheme[0];
  single: any[] = [];

  constructor(private http: HttpClient) {
    this.loadCsvData();
  }

  loadCsvData() {
    this.http
      .get('/assets/sales.csv', {
        responseType: 'text',
      })
      .subscribe((response: any) => {
        let lines = response.split('\n');
        let headers = lines[0].split(',');
        let dataPoints = [];

        for (let i = 1; i < lines.length; i++) {
          let row = lines[i].split(',');
          let dataPoint = {
            name: row[0],
            value: parseInt(row[1]),
          };
          dataPoints.push(dataPoint);
        }

        this.single = [{ name: 'Sales Amount', series: dataPoints }];
      });
  }
}
