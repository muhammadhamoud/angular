import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../shared/shared.module';
import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { NumberCardComponent } from './number-card/number-card.component';
import { ChartsComponent } from './charts.component';
// import { CollectCsvDataComponent } from './collect-csv-data/collect-csv-data.component';
import { LineCsvComponent } from './line-csv/line-csv.component';
import { DataModelsComponent } from './data-models/data-models.component';
import { GaugeChartComponent } from './gauge-chart/gauge-chart.component';
import { BansComponent } from './bans/bans.component';
import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';
import { PieGridComponent } from './pie-grid/pie-grid.component';
// import { NumberCardsStatusComponent } from './number-cards-status/number-cards-status.component';


@NgModule({
  declarations: [
    LineChartComponent, 
    NumberCardComponent, 
    ChartsComponent, LineCsvComponent, DataModelsComponent, GaugeChartComponent, BansComponent, AdvancedPieChartComponent, PieGridComponent,
    // NumberCardsStatusComponent
  ],
  exports: [
    LineChartComponent, 
    NumberCardComponent, 
    ChartsComponent,
    // NumberCardsStatusComponent,
    // CollectCsvDataComponent,
    LineCsvComponent,
    DataModelsComponent,
    GaugeChartComponent,
    BansComponent,
    AdvancedPieChartComponent,
    PieGridComponent,
  ],
  imports: [
    CommonModule, ChartsRoutingModule, SharedModule, NgxChartsModule
  ],

})
export class ChartsModule { }
