import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inform-element',
  templateUrl: './inform-element.component.html',
  styleUrls: ['./inform-element.component.sass']
})
export class InformElementComponent implements OnInit {
public title = 'Informe de gestion sobre el elemento';
  constructor() { }

  ngOnInit(): void {
  }

}
