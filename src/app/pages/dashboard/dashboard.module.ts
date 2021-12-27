import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/sharedModule.module';
import { FormComponent } from '../components/form/form.component';
import { ChartComponent } from '../components/chart/chart.component';
import { AnalyzeAlgoComponent } from '../components/analyze-algo/analyze-algo.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    ChartComponent,
    AnalyzeAlgoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

  ]
})
export class DashboardModule { }
