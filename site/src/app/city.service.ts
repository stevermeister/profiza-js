import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface City {
  id: number;
  title: string;
};

//https://population.mongabay.com/population/netherlands/
const cities: City[] = [
  { id: 1, title: 'Amsterdam' },
  { id: 2, title: 'Rotterdam' },
  { id: 3, title: 'The Hague' },
  { id: 4, title: 'Utrecht' },
  { id: 5, title: 'Eindhoven' },
  { id: 6, title: 'Tilburg' },
  { id: 7, title: 'Groningen' },
  { id: 8, title: 'Almere' },
  { id: 9, title: 'Nijmegen' },
  { id: 9, title: 'Enschede' },
  { id: 9, title: 'Haarlem' },
  { id: 9, title: 'Arnhem' },
  { id: 9, title: 'Zaanstad' },
  { id: 9, title: 'Amersfoort' },
  { id: 9, title: 'Apeldoorn' },
  { id: 9, title: '\'s-Hertogenbosch' },
  { id: 9, title: 'Hoofddorp' },
  { id: 9, title: 'Maastricht' },
  { id: 9, title: 'Leiden' },
  { id: 9, title: 'Dordrecht' },
  { id: 9, title: 'Zoetermeer' },
  { id: 9, title: 'Zwolle' },
  { id: 9, title: 'Nijmegen' },
  { id: 9, title: 'Nijmegen' },
  { id: 9, title: 'Nijmegen' },
  { id: 9, title: 'Nijmegen' },
  { id: 1111, title: 'Deventer' },
  { id: 1111, title: 'Born' },
  { id: 1111, title: 'Delft' },
  { id: 1111, title: 'Alkmaar' },
  { id: 1111, title: 'Heerlen' },
  { id: 1111, title: 'Venlo' },
  { id: 1111, title: 'Leeuwarden' },
  { id: 1111, title: 'Amsterdam-Zuidoost' },
  { id: 1111, title: 'Hilversum' },
  { id: 1111, title: 'Hengelo' },
  { id: 1111, title: 'Amstelveen' },
  { id: 1111, title: 'Roosendaal' },
  { id: 1111, title: 'Purmerend' },
  { id: 1111, title: 'Oss' },
  { id: 1111, title: 'Schiedam' },
  { id: 1111, title: 'Spijkenisse' },
  { id: 1111, title: 'Helmond' },
  { id: 1111, title: 'Vlaardingen' },
  { id: 1111, title: 'Almelo' },
  { id: 1111, title: 'Gouda' },
  { id: 10, title: 'Другой' }
];


@Injectable()
export class CityService {

  constructor() { }

  getAll() {
    return Observable.of(cities);
  }

}
