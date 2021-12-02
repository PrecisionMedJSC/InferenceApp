import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: Options = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}°C',
        style: {
          color: '#3366AA'
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: '#3366AA'
        }
      }
    }, { // Secondary yAxis
      title: {
        text: 'Rainfall',
        style: {
          color: '#003399'
        }
      },
      labels: {
        format: '{value} mm',
        style: {
          color: '#003399'
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor:
        'rgba(255,255,255,0.25)'
    },
    series: [{
      name: 'Rainfall',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' mm'
      }

    }, {
      name: 'Temperature',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: '°C'
      }
    }],
  };

  chart = new Chart(this.options);
}
