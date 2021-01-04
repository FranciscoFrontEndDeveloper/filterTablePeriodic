import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.sass']
})
export class NavbarLeftComponent implements OnInit {
public tablePeriodicTitle: string;
  constructor() {
    this.tablePeriodicTitle = 'tabla periodica de los elementos';
   }

  ngOnInit(): void {
  }

}
