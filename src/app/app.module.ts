import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridMainComponent } from './GridMain/grid-main/grid-main.component';
import { NavbarLeftComponent } from './GridMain/navbar-left/navbar-left.component';

@NgModule({
  declarations: [
    AppComponent,
    GridMainComponent,
    NavbarLeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
