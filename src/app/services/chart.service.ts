import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private data: any;
  public onData: BehaviorSubject<Array<any>>;

  constructor() {
    this.onData = new BehaviorSubject([] as Array<any>);
  }

  setChartData(data: any) {
    this.data = data;
    // console.log(this.data);
    this.onData.next(data);
  }

  getChartData() {
    let result = this.data;
    // this.data = undefined;
    return result;
  }
}
