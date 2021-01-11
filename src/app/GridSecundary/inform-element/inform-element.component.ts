import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inform-element',
  templateUrl: './inform-element.component.html',
  styleUrls: ['./inform-element.component.sass']
})
export class InformElementComponent implements OnInit {
public title = 'Informe de gestion sobre el elemento';
public formImforSupp: any;


  constructor(private formBuilder: FormBuilder) {
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

}
