import { Component, Input, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import { ChartService } from 'src/app/services/chart.service';
// import { Chart } from 'angular-highcharts';
// import { Options } from 'highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {


  // gaugeType = "semi";
  @Input()
  gaugeValue = 0;

  @Input()
  gaugeLabel = "";
  gaugeAppendText = "%";

  thresholdConfig = {
    '0': { color: 'green' },
    '50': { color: 'orange' },
    '70': { color: 'red' }
  };

  constructor() { }
  ngOnInit(): void {
  }


}
