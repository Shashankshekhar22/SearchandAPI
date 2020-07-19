import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchVegetable'
})
export class SearchVegetablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
