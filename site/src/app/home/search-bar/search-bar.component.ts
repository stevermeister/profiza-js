import { Category, CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CityService } from './../../city.service';

type City = {
  id: number;
  title: string;
};

@Component({
  selector: 'profiza-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public randomSpeciality: string;
  public cities: City[] = [];
  public categories: Category[] = [];

  constructor(
    private _router: Router, 
    private _cityService: CityService,
    private _categoryService: CategoryService
  ) {}

  ngOnInit() {
    this._categoryService.getAll().subscribe(categories => this.categories = categories);
    this._cityService.getAll().subscribe(cities => this.cities = cities);
    this.randomSpeciality = 'Сантехник';
  }

  public search(query: string, cityId: number, categoryId: number) {
    this._router.navigate(['search'],  { queryParams: { cityId , query, categoryId} });
  }

}
