import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceNumber'
})
export class NiceNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Intl.NumberFormat().format(value).replace(/,/g, ' ');
  }

}
