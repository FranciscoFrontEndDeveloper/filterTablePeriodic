import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformElementComponent } from './inform-element/inform-element.component';

const routes: Routes = [
  { path: '', component: InformElementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformElementRoutingModule { }
