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
  styleUrls: ['./calculator.component.sass'],
})
export class CalculatorComponent implements OnInit {
  public title = 'calculadora de elementos';
  public dateCurrent1: {};
  public dateCurrent2: any;
  public dateCurrent3: number;
  public valueDataCurrent1: any;
  public dayLoadBefore: string;
  public mountLoadBefore: any;
  public yearLoadBefore: string;
  public tokendQuality: number;
  public Week1: any;
  public Week2: any;
  public Week3: any;
  public Week4: any;
  public Week5: any;
  public dateBetween1: any;
  public dateBetween2: any;
  public dateBetween3: any;
  public dateBetween4: any;
  public dateBetween5: any;

  constructor() {
    this.dateCurrent1 = new Date();
    this.dateCurrent2 = dayjs().format('DD/MM/YYYY');
    this.dateCurrent3 = 0;
    this.tokendQuality = 0;
    this.dayLoadBefore = dayjs().date(24).format('DD');
    this.mountLoadBefore = dayjs().format('MM');
    this.yearLoadBefore = dayjs().format('YYYY');
  }

  ngOnInit(): void {
    this.addZero();
    this.weeksLoads();
  }

  addZero(): void {
    this.dayLoadBefore = dayjs().date(24).format('DD');
    this.dateCurrent1 = Number(this.mountLoadBefore) - 1;
    if (this.dateCurrent1 < 10) {
      this.dateCurrent1 = '0' + this.dateCurrent1;
      this.valueDataCurrent1 = `${this.yearLoadBefore}-${this.dateCurrent1}-${this.dayLoadBefore}`;
    } else {
      this.mountLoadBefore = this.mountLoadBefore;
    }
  }

  weeksLoads(): void {
    this.Week1 = dayjs(this.valueDataCurrent1)
      .date(24)
      .add(1, 'week')
      .format('YYYY-MM-DD');
    this.Week2 = dayjs(this.Week1).add(1, 'week').format('YYYY-MM-DD');
    this.Week3 = dayjs(this.Week2).add(1, 'week').format('YYYY-MM-DD');
    this.Week4 = dayjs(this.Week3).add(1, 'week').format('YYYY-MM-DD');
    this.Week5 = dayjs(this.Week4).add(3, 'day').format('YYYY-MM-DD');

  }

  daytoken(): void {
    this.dateBetween1 = dayjs(this.dateCurrent2).isBetween(
      this.valueDataCurrent1,
      dayjs(this.Week1)
    );
    this.dateBetween2 = dayjs(this.dateCurrent2).isBetween(
      this.Week1,
      dayjs(this.Week2)
    );
    this.dateBetween3 = dayjs(this.dateCurrent2).isBetween(
      this.Week2,
      dayjs(this.Week3)
    );
    this.dateBetween4 = dayjs(this.dateCurrent2).isBetween(
      this.Week3,
      dayjs(this.Week4)
    );
    this.dateBetween5 = dayjs(this.dateCurrent2).isBetween(
      this.Week4,
      dayjs(this.Week5)
    );

    switch (true) {
      case this.dateBetween1:
        this.tokendQuality = Math.round(this.dateCurrent3 / 1);
        break;
      case this.dateBetween2:
        this.tokendQuality = Math.round(this.dateCurrent3 / 2);
        break;
      case this.dateBetween3:
        this.tokendQuality = Math.round(this.dateCurrent3 / 3);
        break;
      case this.dateBetween4:
        this.tokendQuality = Math.round(this.dateCurrent3 / 4);
        break;
      case this.dateBetween5:
        this.tokendQuality = Math.round(this.dateCurrent3 / 4);
        break;

      default:
        this.tokendQuality = Math.round(this.dateCurrent3 / 1);
        break;
    }
  }
}
