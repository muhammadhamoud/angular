import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import Papa from 'papaparse';
// import { CsvReaderService } from '@swimlane/ngx-charts';


@Component({
  selector: 'ROI-collect-csv-data',
  templateUrl: './collect-csv-data.component.html',
  styleUrls: ['./collect-csv-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectCsvDataComponent {
  dataPoints: any = [];
  showChart: Boolean = false;
  // multi: any[] | [];
  single: any[] = [];

  constructor(private http: HttpClient) {
    this.loadCsvData();
    // const multi = [{ name: 'Sales', series: this.dataPoints }];
    // console.log(multi)
    // Object.assign(this, { multi });
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

        this.single = [{ name: 'Sales', series: dataPoints }];
        //   // group data by name and sum values
        //   let result: any = {};
        //   dataPoints.forEach((dataPoint) => {
        //     if (result[dataPoint.name]) {
        //       result[dataPoint.name] += dataPoint.value;
        //     } else {
        //       result[dataPoint.name] = dataPoint.value;
        //     }
        //   });

        //   // convert result to array of objects
        //   let output = Object.keys(result).map((name) => {
        //     return { name: name, value: result[name] };
        //   });
        //   console.log(output);
        //   // output: [{ name: 'East', value: 691828 }]
      });
  }
  //  loadCsvData() {
  //   this.http
  //     .get('/assets/sales.csv', {
  //       responseType: 'text',
  //     })
  //     .subscribe((response: any) => {
  //       let csvRowData = response.split(/[\r?\n|\r|\n]+/);
  //       csvRowData.forEach((rowData: any, index: number) => {
  //         if (index === 0) return;
  //         var data = rowData.split(',');
  //         // console.log(data)
  //         this.dataPoints.push({ name: data[0], value: parseInt(data[1])});

  //       let csvData = csvRowData.data;
  //       let dataPoints = csvData.map((row: any) => ({
  //         name: row.product_name,
  //         value: parseInt(row.sales),
  //       }));
  //       this.single = [{ name: 'Sales', series: dataPoints }];
  //     });
  // }
  // ngAfterViewInit() {
  //   this.http
  //     .get('/assets/sales.csv', {
  //       responseType: 'text',
  //     })
  //     .subscribe((response: any) => {
  //       let csvRowData = response.split(/[\r?\n|\r|\n]+/);
  //       csvRowData.forEach((rowData: any, index: number) => {
  //         if (index === 0) return;
  //         var data = rowData.split(',');
  //         // console.log(data)
  //         this.dataPoints.push({ name: data[0], value: parseInt(data[1])});

  //       });
  //       this.showChart = true;
  //     });
  // }


  onGetData() {
    console.log(this.single)
    return this.single

  }


}
