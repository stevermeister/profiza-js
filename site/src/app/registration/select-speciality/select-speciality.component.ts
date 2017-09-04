import { CategoryService, Category } from './../../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-select-speciality',
  templateUrl: './select-speciality.component.html',
  styleUrls: ['./select-speciality.component.scss']
})
export class SelectSpecialityComponent implements OnInit {

  public firstCategorySet: Category[] = [];
  public secondCategorySet: Category[] = [];

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.getAll().subscribe((categories: Category[]) => {
      this.firstCategorySet = categories.slice(0, 6);
      this.secondCategorySet = categories.slice(6, 12);
    });
  }

}
