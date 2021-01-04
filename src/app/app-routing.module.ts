import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridMainComponent } from './GridMain/grid-main/grid-main.component';

const routes: Routes = [
 { path: '', component: GridMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
