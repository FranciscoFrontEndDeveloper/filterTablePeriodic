import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/Services/elements.service';
import { InterfazElement } from '../../Interfases/interfaz-element';
import { element } from 'protractor';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.sass']
})
export class ElementListComponent implements OnInit {
public elements: any = [];
public elementsNumber: [] = [];
public opcionElegida: string;
public optionSelecteds: any[];
public numberStyle: string;
public prueba1: string;
public prueba2: string;
public numberFilter: null;
  constructor(private elementsService: ElementsService) {
    this.opcionElegida = '';
    this.numberStyle = '';
    this.prueba1 = 'seleccion';
    this.prueba2 = 'no seleccion';
    this.numberFilter = null;
    this.optionSelecteds = [
      {id: 1, optionss: 'seleccione un grupo'},
      {id: 2, optionss: 'metales alcalinos'},
      {id: 3, optionss: 'alcalinoterreos'},
      {id: 4, optionss: 'metales de transicion'},
      {id: 5, optionss: 'otros metales'},
      {id: 6, optionss: 'metaloides'},
      {id: 7, optionss: 'no metales'},
      {id: 8, optionss: 'halogenos'},
      {id: 9, optionss: 'gases nobles'},
      {id: 10, optionss: 'lactanidos'},
      {id: 11, optionss: 'actinidos'},
    ];
   }

  ngOnInit(): void {
    this.getAllElements();
    console.log(this.opcionElegida);
  }


  getAllElements(): void {
    this.elements = this.elementsService.Elements;
    // console.log(this.elements);
  }


  seleccion(): void{
    switch (this.opcionElegida){
      case 'metales alcalinos': {
        this.numberStyle = '#C2000B';
        break;
      }
      case 'alcalinoterreos': {
        this.numberStyle = '#FE330A';
        break;
      }
      case 'metales de transicion': {
        this.numberStyle = '#FEA621';
        break;
      }
      case 'otros metales': {
        this.numberStyle = '#80C41C';
        break;
      }
      case 'metaloides': {
        this.numberStyle = '#237D26';
        break;
      }
      case 'no metales': {
        this.numberStyle = '#349980';
        break;
      }
      case 'halogenos': {
        this.numberStyle = '#4A017D';
        break;
      }
      case 'gases nobles': {
        this.numberStyle = '#82027E';
        break;
      }
      case 'lactanidos': {
        this.numberStyle = '#0B0146';
        break;
      }
      case 'actinidos': {
        this.numberStyle = '#2E58A6';
        break;
      }
    }
    console.log(this.opcionElegida);
  }


}
