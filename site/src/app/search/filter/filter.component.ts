import { CityService, City } from './../../city.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'profiza-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() query: string;
  @Output() filterChanged: EventEmitter<any>;

  filterForm: FormGroup;

  public cities: City[];

  constructor(private _cityService: CityService, private formBuilder: FormBuilder) {
    this.filterChanged = new EventEmitter();
  }

  ngOnInit() {
    this._cityService.getAll().subscribe(cities => this.cities = cities);

    this.filterForm = this.formBuilder.group({
      query: '',
      city: '',
      district: '',
      withReviews: false
    });

    this.filterForm.valueChanges.subscribe(filterOptions => this.filterChanged.emit(filterOptions));
  }

}
