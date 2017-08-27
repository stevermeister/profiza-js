import { Speciality, CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profiCount: number = 157;
  public specialityCount: number;

  constructor(private _categoryService: CategoryService) {
    this._categoryService.getAll()
      .subscribe(specialities => this.specialityCount = specialities.length)

  }

  ngOnInit() {
  }

}
