import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface City {
  id: number;
  title: string;
};

@Injectable()
export class CityService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<City[]>('https://profiza-api.herokuapp.com/cities');
  }

}
