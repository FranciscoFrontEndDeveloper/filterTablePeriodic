import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';
import 'dayjs/plugin/isBetween';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  public title = 'calculadora de elementos';
  public dateCurrent1: {};
  public dateCurrent2: {};
  public dateCurrent3: boolean;
  public valueDataCurrent1: string | undefined;
  public dayLoadBefore: string;
  public mountLoadBefore: any;
  public yearLoadBefore: string;
  public entreDates: any;
  public Week1: string;
  constructor() {
    this.dateCurrent1 = new Date();
    this.dateCurrent2 = dayjs().format('DD/MM/YYYY');
    this.dateCurrent3 = true;
    this.valueDataCurrent1 = dayjs().format('YYYY-MM-DD');
    this.dayLoadBefore = dayjs().date(24).format('DD');
    this.mountLoadBefore = dayjs().format('MM');
    this.yearLoadBefore = dayjs().format('YYYY');
    this.Week1 = dayjs().format('YYYY-MM-DD');
    console.log(this.Week1);
    // console.log(this.dayLoadBefore = dayjs().format('DD'));
    // console.log(dayjs().date(24).format('DD'));


   }

  ngOnInit(): void {

    this.addZero();
  }

  daytoken(): void{
    // console.log(this.valueDataCurrent1);
    // console.log(this.dateCurrent2);
    if (this.dateCurrent2 === this.valueDataCurrent1) {
      console.log('son iguales');
    }else {
      console.log('son diferentes');
    }
  }
  addZero(): void{
    this.mountLoadBefore = dayjs().format('MM');
    this.dayLoadBefore = dayjs().date(24).format('DD');
    this.dateCurrent1 = Number(this.mountLoadBefore) - 1;
    if (this.dateCurrent1 < 10) {
      this.dateCurrent1 = '0' + this.dateCurrent1;
      this.valueDataCurrent1 = `${this.yearLoadBefore}-${this.dateCurrent1}-${this.dayLoadBefore}`;
    } else {
      this.mountLoadBefore = this.mountLoadBefore;
    }
  }
}
