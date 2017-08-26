import { CityService } from './../../city.service';
import { Component, OnInit } from '@angular/core';

type City = {
  id: number;
  title: string;
}

@Component({
  selector: 'profiza-city-filter-bar',
  templateUrl: './city-filter-bar.component.html',
  styleUrls: ['./city-filter-bar.component.scss']
})
export class CityFilterBarComponent implements OnInit {

  public cities: City[];

  constructor(private _cityService: CityService) {
    this._cityService.getAll().subscribe(cities => this.cities = cities);
  }

  ngOnInit() {
  }

}
