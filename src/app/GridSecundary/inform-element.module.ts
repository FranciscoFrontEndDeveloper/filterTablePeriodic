
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformElementRoutingModule } from './inform-element-routing.module';
import { InformElementComponent } from './inform-element/inform-element.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InformElementComponent, CalculatorComponent, HomeButtonComponent, TitleComponentComponent ],
  imports: [
    CommonModule,
    InformElementRoutingModule,
    FormsModule
  ]
})
export class InformElementModule { }
