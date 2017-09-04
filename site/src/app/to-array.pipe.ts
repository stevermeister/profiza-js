import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArray'
})
export class ToArrayPipe implements PipeTransform {

  transform (input: any): any {

    if (typeof input !== 'object') {
      return input;
    }

    return Object.keys(input).map((value) => input[value]);
  }

}