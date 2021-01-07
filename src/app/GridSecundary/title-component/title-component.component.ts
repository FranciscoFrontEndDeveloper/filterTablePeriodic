import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.sass']
})
export class TitleComponentComponent implements OnInit {
@Input() currentTitle: string;
  constructor() {
    this.currentTitle = '';
   }

  ngOnInit(): void {
  }

}
