import { UserService, User } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public users: User[];

  constructor(
    private _userService: UserService) { }

  ngOnInit() {
    this._userService.getAllNew().subscribe(users => this.users = users);
  }

}
