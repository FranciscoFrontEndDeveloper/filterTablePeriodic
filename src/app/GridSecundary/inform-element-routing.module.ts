import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { InformElementComponent } from './inform-element/inform-element.component';

const routes: Routes = [
  { path: '', component: InformElementComponent },
  { path: '', component: CalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformElementRoutingModule { }
