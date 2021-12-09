import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  opened: boolean = true;
  value: Array<any> = [];
  constructor(private chartService: ChartService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chartService.onData.subscribe((value) => {
      console.log(value);
      this.value = value;
      this.cdr.detectChanges();
    })
  }

  round(value: number) {
    return Math.round(value * 100) / 100;
  }



}
