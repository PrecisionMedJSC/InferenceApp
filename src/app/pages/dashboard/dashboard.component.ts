import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navPosition: any = "start";
  openedL: boolean = true;
  openedR: boolean = false;
  hasBackdrop = false;
  value: Array<any> = [];
  choosedAlgoAnalyze: Array<any> = [];
  constructor(private chartService: ChartService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.chartService.onData.subscribe((value) => {
      // console.log(value);
      this.value = value;
      this.cdr.detectChanges();
    })
  }

  round(value: number) {
    return Math.round(value * 100) / 100;
  }
  onToggleSidenavL(sidenavL: any) {
    sidenavL.toggle();
    this.hasBackdrop = false;
  }
  onToggleSidenavR(sidenavR: any, event: any, item: any) {
    sidenavR.toggle();
    this.hasBackdrop = true;
    this.choosedAlgoAnalyze = item;
  }
  Analize(i: any) {
    console.log(i);
  }


}
