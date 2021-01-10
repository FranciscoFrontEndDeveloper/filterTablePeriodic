import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAtomic'
})
export class NumberAtomicPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter((element: any) => element.indexOf(input) >= 0);
    }
    else {
      return ;
    }
  }

}
