import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Category {
  id: number;
  title: string;
  totalWorkers: number;
};

export interface Speciality {
  id: number;
  categoryId: number;
  title: string;
  totalWorkers: number;
}
@Injectable()
export class CategoryService {

  constructor(private _http: HttpClient) {}

  getOne(id: number): Observable<Category> {
    return this._http.get<Category>(`https://profiza-api.herokuapp.com/categories/${id}`);
  }

  getAll(): Observable<Category[]> {
    return this._http.get<Category[]>('https://profiza-api.herokuapp.com/categories');
  }

}
