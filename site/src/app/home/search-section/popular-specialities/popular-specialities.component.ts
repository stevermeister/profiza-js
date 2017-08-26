import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-popular-specialities',
  templateUrl: './popular-specialities.component.html',
  styleUrls: ['./popular-specialities.component.scss']
})
export class PopularSpecialitiesComponent implements OnInit {

  public popularSpecialities = [
    {id: 111, title: 'Бодибилдинг', totalWorkers: 4963},
    {id: 222, title: 'Репетитор - английский', totalWorkers: 5453},
    {id: 333, title: 'Маникюр', totalWorkers: 4130},
    {id: 444, title: 'Вождение мотоцикла', totalWorkers: 4354},
    {id: 555, title: 'Отоларингологи', totalWorkers: 3074},
  ];

  constructor() { }

  ngOnInit() {
  }

}
