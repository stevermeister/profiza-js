import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-active-profiles',
  templateUrl: './active-profiles.component.html',
  styleUrls: ['./active-profiles.component.scss']
})
export class ActiveProfilesComponent implements OnInit {

  public activeUsers = [
    {id: 111, name: 'Аврамец Анжелика', speciality: 'дерматолог', avatar: 'assets/images/user-1.jpg'},
    {id: 222, name: 'Литвиненко Наталья', speciality: 'репетитор - математика', avatar: 'assets/images/user-2.jpg' },
    {id: 333, name: 'Иванов Олег', speciality: 'электик', avatar: 'assets/images/user-3.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
