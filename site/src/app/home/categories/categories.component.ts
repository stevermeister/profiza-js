import { Component, OnInit } from '@angular/core';

type Category = {
  id: number;
  title: string;
};

@Component({
  selector: 'profiza-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

   public categories: Category[];

  constructor() { }

  ngOnInit() {
    this.categories = [
      {id: 1, title: 'Репетиторы'},
      {id: 2, title: 'Мастера по ремонту'},
      {id: 3, title: 'Мастера красоты'},
      {id: 4, title: 'Врачи'},
      {id: 5, title: 'Спортивные тренера'},
      {id: 6, title: 'Автоинструкторы'}
    ];
  }

}
