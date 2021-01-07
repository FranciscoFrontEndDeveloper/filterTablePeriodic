
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformElementRoutingModule } from './inform-element-routing.module';
import { InformElementComponent } from './inform-element/inform-element.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeButtonComponent } from './home-button/home-button.component';


@NgModule({
  declarations: [InformElementComponent, CalculatorComponent, HomeButtonComponent ],
  imports: [
    CommonModule,
    InformElementRoutingModule,
  ]
})
export class InformElementModule { }
