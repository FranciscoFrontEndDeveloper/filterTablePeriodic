import { NumberAtomicPipe } from './../../Pipes/number-atomic.pipe';
import { Component, OnInit } from '@angular/core';
import { ElementsService } from 'src/app/Services/elements.service';
import { InterfazElement } from '../../Interfases/interfaz-element';


@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.sass']
})
export class ElementListComponent implements OnInit {
public elements: InterfazElement[];
// public elements2: any = [];
public opcionElegida: string;
public numberStyle: string;
public numberAtomic: number;
public newElements: any;
  constructor(private elementsService: ElementsService) {
    this.opcionElegida = '';
    this.numberStyle = '';
    this.numberAtomic = 0;
    this.newElements = [];
    this.elements = [];
   }

  ngOnInit(): void {
    this.getAllElements();


  }


  getAllElements(): void {
    this.elements = this.elementsService.getAllElements();
  }

  filterAtomicNumber(numberAtomic: number): InterfazElement[] {
    if (numberAtomic > 0) {
      this.elements = this.elementsService.filterAtomicNumber(numberAtomic);
    } else if (numberAtomic === 0) {
      this.getAllElements();
    }
    return this.elements;
  }

  filterGroupBlock(optionGroup: string): InterfazElement[]{
    if (optionGroup !== '') {
      this.elements = this.elementsService.filterGroupBlock(optionGroup);
      console.log(this.elements);
    } else {
      this.getAllElements();
    }
    return this.elements;
  }
  selectGroupBlock(): any{
    this.filterGroupBlock(this.opcionElegida);
    switch (this.opcionElegida){
      case 'alkali metal': {
        this.numberStyle = '#C2000B';
        break;
      }
      case 'alkaline earth metal': {
        this.numberStyle = '#FE330A';
        break;
      }
      case 'transition metal': {
        this.numberStyle = '#FEA621';
        break;
      }
      case 'post-transition metal': {
        this.numberStyle = '#80C41C';
        break;
      }
      case 'metalloid': {
        this.numberStyle = '#237D26';
        break;
      }
      case 'nonmetal': {
        this.numberStyle = '#349980';
        break;
      }
      case 'halogen': {
        this.numberStyle = '#4A017D';
        break;
      }
      case 'noble gas': {
        this.numberStyle = '#82027E';
        break;
      }
      case 'lanthanoid': {
        this.numberStyle = '#0B0146';
        break;
      }
      case 'actinoid': {
        this.numberStyle = '#2E58A6';
        break;
      }
      case '': {
        this.numberStyle = '#001D4A';
        break;
      }
    }
    console.log(this.opcionElegida);
  }


}

