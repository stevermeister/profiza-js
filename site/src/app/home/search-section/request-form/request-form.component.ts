import { CategoryService } from './../../../category.service';
import { CityService } from './../../../city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  public cities;
  public categories;
  public specialities;

  constructor(private _cityService: CityService, private _categoryService: CategoryService) {
     this._cityService.getAll().subscribe(cities => this.cities = cities);
     this._categoryService.getAll().subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
  }

  sendRequest() {
    alert('Спасибо, запрос принят в обработку');
  }

}
