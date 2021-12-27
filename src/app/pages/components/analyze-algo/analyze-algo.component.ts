import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { MlService } from 'src/app/services/ml.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-analyze-algo',
  templateUrl: './analyze-algo.component.html',
  styleUrls: ['./analyze-algo.component.scss']
})

export class AnalyzeAlgoComponent implements OnInit {

  @Input()
  algoList: any;

  selectedFeatures = '1,1,1,1,0';
  delta = 0.00001;
  learningRate = 0.01;
  step = 200;
  expectedRiskFactor = 0;
  analyzeChartData: Array<any> = [];
  chartConfigs: Array<Partial<ChartOptions> | any> = [];
  noResult: boolean = true;
  @ViewChild("chart") chart!: ChartComponent | any;
  public chartOptions!: Partial<ChartOptions> | any;
  constructor(private mlService: MlService) {

  }

  async ngOnInit() {
  }
  async calculate() {
    let result: Array<any> = [];
    result.push(await this.mlService.analyzeAlgo(this.algoList['algorithm'], this.selectedFeatures, this.delta, this.learningRate, this.step));
    // console.log(result[0]['gradient_descent']);
    // console.log(result[0]['gradient_descent'].length);
    let input = this.mlService.input.split(",");
    this.chartConfigs.length = 0;
    this.noResult = true;
    for (let i = 0; i < result[0]['gradient_descent'].length; i++) {
      if ((this.expectedRiskFactor / 100) >= result[0]['gradient_descent'][i]['result'][0][0]) {
        this.noResult = false;
        this.analyzeChartData = result[0]['gradient_descent'][i]['x'];
        console.log(this.analyzeChartData);
        for (let j = 0; j < input.length; j++) {
          console.log(this.mlService.features[j]['name']);
          this.chartConfigs.push({
            series: [
              {
                name: "basic",
                data: [parseFloat(input[j]), parseFloat(result[0]['gradient_descent'][i]['x'][j])]
              }
            ],
            chart: {
              type: "bar",
              height: 400
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            dataLabels: {
              enabled: true
            },
            xaxis: {
              categories: [
                "Before",
                "After"
              ]
            },
            title: {
              text: this.mlService.features[j]['name'] + ' (' + this.mlService.features[j]['unit'] + ')',
              floating: 0,
              align: "center",
              style: {
                color: "#444"
              }
            }
          })
        }

        return;
      }
    }
  }
}
