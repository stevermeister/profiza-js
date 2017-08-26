import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface City {
  id: number;
  title: string;
};

const cities: City[] = [
  { id: 1, title: 'Киев' },
  { id: 2, title: 'Харьков' },
  { id: 3, title: 'Одесса' },
  { id: 4, title: 'Львов' },
  { id: 5, title: 'Днепропетровск' },
  { id: 6, title: 'Запорожье' },
  { id: 6, title: 'Херсон' }
];

@Injectable()
export class CityService {

  constructor() { }

  getAll() {
    return Observable.of(cities);
  }

}
