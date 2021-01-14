import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ElementsService } from '../../Services/elements.service';

@Component({
  selector: 'app-inform-element',
  templateUrl: './inform-element.component.html',
  styleUrls: ['./inform-element.component.sass']
})
export class InformElementComponent implements OnInit {
public title = 'Informe de gestion sobre el elemento';
public formImforSupp: any;
public ArraySupporPack: any;
public arrayProcess: any;
public itemSupport: any;


  constructor(private formBuilder: FormBuilder, private elementsService: ElementsService) {
    this.formImforSupp = formBuilder.group({
      element:   [''],
      user:      [''],
      phone:     [''],
      position:  [''],
      descUser:  [''],
      diagAgent: ['']
    });
   }

  ngOnInit(): void {
  }

  subFormSupp(): void{
    console.log(this.formImforSupp.value);
  }

  arrayProcediment(): any{
    this.filterProcediment(this.itemSupport);
  }

  filterProcediment(itemSupport: any): any{
    if (itemSupport !== '') {
      this.arrayProcess = this.elementsService.filterProcediment(itemSupport);
    } else {
      this.arrayProcess = null;
    }
  }
}
