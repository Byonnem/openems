import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { ChargerChartComponent } from './chart/chargerChart';
import { ProductionMeterChartComponent } from './chart/productionMeterChart';
import { TotalAcChartComponent } from './chart/totalAcChart';
import { TotalChartComponent } from './chart/totalChart';
import { TotalDcChartComponent } from './chart/totalDcChart';
import { FlatComponent } from './flat/flat';
import { ProductionChartOverviewComponent } from './overview/overview';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  entryComponents: [
    FlatComponent,
    ProductionChartOverviewComponent,
    ProductionMeterChartComponent,
    TotalDcChartComponent,
    TotalAcChartComponent,
    TotalChartComponent,
    ChargerChartComponent
  ],
  declarations: [
    FlatComponent,
    ProductionChartOverviewComponent,
    ProductionMeterChartComponent,
    TotalDcChartComponent,
    TotalAcChartComponent,
    TotalChartComponent,
    ChargerChartComponent
  ],
  exports: [
    FlatComponent,
    ProductionChartOverviewComponent,
    ProductionMeterChartComponent,
    TotalDcChartComponent,
    TotalAcChartComponent,
    TotalChartComponent,
    ChargerChartComponent
  ]
})
export class Common_Production { }
