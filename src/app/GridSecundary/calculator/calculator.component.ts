import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/plugin/isBetween';
// tslint:disable-next-line: prefer-const
let isBetween = require('dayjs/plugin/isBetween');
dayjs.extend(isBetween);
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  public title = 'calculadora de elementos';
  public dateCurrent1: {};
  public dateCurrent2: any;
  public dateCurrent3: boolean;
  public valueDataCurrent1: any;
  public dayLoadBefore: string;
  public mountLoadBefore: any;
  public yearLoadBefore: string;
  public entreDates: any;
  public Week1: any;
  public Week2: any;
  public Week3: any;
  public Week4: any;
  public dateBetween: any;
  constructor() {
    this.dateCurrent1 = new Date();
    this.dateCurrent2 = dayjs().format('DD/MM/YYYY');
    this.dateCurrent3 = true;
    this.dayLoadBefore = dayjs().date(24).format('DD');
    this.mountLoadBefore = dayjs().format('MM');
    this.yearLoadBefore = dayjs().format('YYYY');
   }

  ngOnInit(): void {

    this.addZero();
    this.weeksLoads();
  }


  addZero(): void{
    // this.mountLoadBefore = dayjs().format('MM');
    this.dayLoadBefore = dayjs().date(24).format('DD');
    this.dateCurrent1 = Number(this.mountLoadBefore) - 1;
    if (this.dateCurrent1 < 10) {
      this.dateCurrent1 = '0' + this.dateCurrent1;
      this.valueDataCurrent1 = `${this.yearLoadBefore}-${this.dateCurrent1}-${this.dayLoadBefore}`;
    } else {
      this.mountLoadBefore = this.mountLoadBefore;
    }
  }

  weeksLoads(): void{
    console.log(this.valueDataCurrent1);
    this.Week1 = dayjs(this.valueDataCurrent1).date(24).add(8, 'day').format('YYYY-MM-DD');
    // console.log(this.Week1);
    this.Week2 = dayjs(this.Week1).date(1).add(8, 'day').format('YYYY-MM-DD');
    // console.log(this.Week2);
    this.Week3 = dayjs(this.Week2).date(9).add(8, 'day').format('YYYY-MM-DD');
    // console.log(this.Week3);
    this.Week4 = dayjs(this.Week3).date(17).add(7, 'day').format('YYYY-MM-DD');
    // console.log(this.Week4);
  }

  daytoken(): void{
    console.log(this.valueDataCurrent1);
    console.log(this.dateCurrent2);

    this.dateBetween = dayjs(this.dateCurrent2).isBetween(this.valueDataCurrent1, dayjs(this.Week1));
    console.log(this.dateBetween);

    // if (this.dateCurrent2 === this.valueDataCurrent1) {
    //   console.log('multiplicar por 1');
    // }else {
    //   console.log('multiplicar por 2');
    // }

    // switch (this.dateCurrent2) {
    //   case (this.dateCurrent2 === this.Week1):
    //     console.log(this.dateCurrent2);
    //     console.log(this.Week1);
    //     console.log('multiplicar por 1');
    //     break;

    //   default:
    //     console.log('sin fecha');
    //     break;
    // }
  }
}
