
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformElementRoutingModule } from './inform-element-routing.module';
import { InformElementComponent } from './inform-element/inform-element.component';


@NgModule({
  declarations: [InformElementComponent, ],
  imports: [
    CommonModule,
    InformElementRoutingModule,
  ]
})
export class InformElementModule { }
