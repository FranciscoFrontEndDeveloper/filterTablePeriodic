import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridMainComponent } from './GridMain/grid-main/grid-main.component';
import { NavbarLeftComponent } from './GridMain/navbar-left/navbar-left.component';
import { ElementListComponent } from './GridMain/element-list/element-list.component';
import { HomeButtonComponent } from './GridMain/home-button/home-button.component';
import { CreditsComponent } from './GridMain/credits/credits.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GridMainComponent,
    NavbarLeftComponent,
    ElementListComponent,
    HomeButtonComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
