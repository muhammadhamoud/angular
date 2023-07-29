import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ROI-data-models',
  templateUrl: './data-models.component.html',
  styleUrls: ['./data-models.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataModelsComponent {

  data: any;

  constructor(private http: HttpClient) { 
    this.loadData();
  }

  loadData() {
    const csvFilePath = 'assets/superstore.csv';
    this.http.get(csvFilePath, { responseType: 'text' })
      .subscribe((data: any) => {
        const parsedData = this.parseCSVData(data);
        this.data = parsedData;
        // console.log(this.data)
      });
  }

  parseCSVData(csvData: string): any[] {
    const lines = csvData.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    console.log(headers)
    for (let i = 1; i < lines.length; i++) {
      const obj: any = {};
      const currentLine = lines[i].split(',');
  
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentLine[j];
        
      }
        result.push(obj);
    }
  
    return result;
  }



}
