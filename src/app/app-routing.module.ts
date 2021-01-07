import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridMainComponent } from './GridMain/grid-main/grid-main.component';

const routes: Routes = [
 { path: '', component: GridMainComponent },
 {
   path: 'inform',
   loadChildren: () => import('./GridSecundary/inform-element.module').then(m => m.InformElementModule)
 },
 {
   path: 'calculator',
   loadChildren: () => import('./GridSecundary/inform-element.module').then(m => m.InformElementModule)
 },
 { path: '**', component: GridMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
