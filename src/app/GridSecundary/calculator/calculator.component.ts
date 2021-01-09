import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  public title = 'calculadora de elementos';
  public dateCurrent: {};
  constructor() {
    this.dateCurrent = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
