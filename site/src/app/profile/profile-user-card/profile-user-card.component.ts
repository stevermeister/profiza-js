import { CategoryService, Speciality } from './../../category.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'profiza-profile-user-card',
  templateUrl: './profile-user-card.component.html',
  styleUrls: ['./profile-user-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileUserCardComponent implements OnInit {

  @Input() user;

  public speciality: Speciality;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {

  }

}
