import { CityService } from './../../city.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  public cities;

  constructor(private _cityService: CityService) {
    this._cityService.getAll().subscribe(cities => this.cities = cities);
  }

  ngOnInit() {
  }

}
