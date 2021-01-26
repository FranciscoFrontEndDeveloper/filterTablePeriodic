import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridMainComponent } from './GridMain/grid-main/grid-main.component';
import { NavbarLeftComponent } from './GridMain/navbar-left/navbar-left.component';
import { ElementListComponent } from './GridMain/element-list/element-list.component';
import { CreditsComponent } from './GridMain/credits/credits.component';
import { FormsModule } from '@angular/forms';
import { NumberAtomicPipe } from './Pipes/number-atomic.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    GridMainComponent,
    NavbarLeftComponent,
    ElementListComponent,
    CreditsComponent,
    NumberAtomicPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
