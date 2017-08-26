import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profiza-popular-category',
  templateUrl: './popular-category.component.html',
  styleUrls: ['./popular-category.component.scss']
})
export class PopularCategoryComponent implements OnInit {

  public offerNumber: number;
  public servicesNumber: number;
  // TODO: put to service
  public specialities = [
    {id: 1, title: 'Сантехники' },
    {id: 2, title:  'Электрики' },
    {id: 3, title:  'Плиточники' },
    {id: 4, title:  'Штукатуры' },
    {id: 5, title:  'Ремонт квартир' }
  ];

  constructor() {
    this.offerNumber = 13310;
    this.servicesNumber = 1227;
  }

  ngOnInit() {
  }

}
