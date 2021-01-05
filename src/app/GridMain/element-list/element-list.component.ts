import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/Services/elements.service';
import { InterfazElement } from '../../Interfases/interfaz-element';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.sass']
})
export class ElementListComponent implements OnInit {
public elements: any = [];
  constructor(private elementsService: ElementsService) { }

  ngOnInit(): void {
    this.getAllElements();
  }


  getAllElements(): void {
    this.elements = this.elementsService.Elements;
    // console.log(this.elements);
  }
}
