import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface Category {
  id: number;
  title: string;
  totalWorkers: number;
};

export interface Speciality {
  id: number;
  categoryId: number;
  title: string;
  totalWorkers: number;
}

const categories: Category[] = [
  { id: 1, title: 'Репетиторы', totalWorkers: 150 },
  { id: 2, title: 'Строители', totalWorkers: 34 },
  { id: 3, title: 'Мастера красоты', totalWorkers: 62 },
  { id: 4, title: 'Врачи', totalWorkers: 17 },
  { id: 5, title: 'Спортивные тренеры', totalWorkers: 89 },
  { id: 6, title: 'Автоинструкторы', totalWorkers: 132 },
  { id: 7, title: 'Втеринары, специалисты по работе с животными', totalWorkers: 45 },
  { id: 8, title: 'Юристы, экономисты и бухгалтеры', totalWorkers: 23 },
  { id: 9, title: 'IT фрилансеры', totalWorkers: 5 },
  { id: 10, title: 'Артисты и праздничные специалисты', totalWorkers: 5 },
  { id: 11, title: 'Домашний персонал', totalWorkers: 5 }
];

const specialities: Speciality[] = [
  {id: 1, categoryId: 1, title: 'Английский язык', totalWorkers: 150 },
  {id: 2, categoryId: 1, title: 'Математика', totalWorkers: 150 },
  {id: 3, categoryId: 1, title: 'Информатика', totalWorkers: 150 },
  {id: 4, categoryId: 1, title: 'Начальная школа', totalWorkers: 150 },
  {id: 5, categoryId: 1, title: 'Музыка', totalWorkers: 150 },
  {id: 6, categoryId: 1, title: 'Биология', totalWorkers: 150 },
  {id: 7, categoryId: 1, title: 'География', totalWorkers: 150 },
  {id: 8, categoryId: 1, title: 'Физика', totalWorkers: 150 },
  {id: 9, categoryId: 1, title: 'Украинский язык', totalWorkers: 150 },
  {id: 10, categoryId: 1, title: 'Химия', totalWorkers: 150 },

  {id: 11, categoryId: 2, title: 'Сантехники', totalWorkers: 150 },
  {id: 12, categoryId: 2, title: 'Электрики', totalWorkers: 150 },
  {id: 13, categoryId: 2, title: 'Плиточники', totalWorkers: 150 },
  {id: 14, categoryId: 2, title: 'Штукатуры', totalWorkers: 150 },
  {id: 15, categoryId: 2, title: 'Ремонт квартир', totalWorkers: 150 },
  {id: 16, categoryId: 2, title: 'Высотные работы', totalWorkers: 150 },
  {id: 17, categoryId: 2, title: 'Дизайн', totalWorkers: 150 },
  {id: 18, categoryId: 2, title: 'Земляные работы', totalWorkers: 150 },
  {id: 19, categoryId: 2, title: 'Каменьщики', totalWorkers: 150 },

  {id: 20, categoryId: 3, title: 'Макияж', totalWorkers: 150 },
  {id: 21, categoryId: 3, title: 'Маникюр', totalWorkers: 150 },
  {id: 22, categoryId: 3, title: 'Причёски', totalWorkers: 150 },
  {id: 23, categoryId: 3, title: 'Эпиляция', totalWorkers: 150 },
  {id: 24, categoryId: 3, title: 'Стилисты', totalWorkers: 150 },
  {id: 25, categoryId: 3, title: 'Косметолог', totalWorkers: 150 },
  {id: 26, categoryId: 3, title: 'Брови и ресницы', totalWorkers: 150 },
  {id: 27, categoryId: 3, title: 'Массаж', totalWorkers: 150 },
  {id: 28, categoryId: 3, title: 'Пирсинг', totalWorkers: 150 },
  {id: 29, categoryId: 3, title: 'Татуаж', totalWorkers: 150 },

  {id: 30, categoryId: 4, title: 'Гинекологи', totalWorkers: 150 },
  {id: 31, categoryId: 4, title: 'Дерматологи', totalWorkers: 150 },
  {id: 32, categoryId: 4, title: 'Отоларингологи', totalWorkers: 150 },
  {id: 33, categoryId: 4, title: 'Педиатры', totalWorkers: 150 },
  {id: 34, categoryId: 4, title: 'Стоматологи', totalWorkers: 150 },
  {id: 35, categoryId: 4, title: 'Кардиологи', totalWorkers: 150 },
  {id: 36, categoryId: 4, title: 'Хирурги', totalWorkers: 150 },
  {id: 37, categoryId: 4, title: 'Медсестры', totalWorkers: 150 },
  {id: 38, categoryId: 4, title: 'Урологи', totalWorkers: 150 },
  {id: 39, categoryId: 4, title: 'Гастроэнтерологи', totalWorkers: 150 },

  {id: 40, categoryId: 5, title: 'Йога', totalWorkers: 150 },
  {id: 41, categoryId: 5, title: 'Бокс', totalWorkers: 150 },
  {id: 42, categoryId: 5, title: 'Фитнес', totalWorkers: 150 },
  {id: 43, categoryId: 5, title: 'Плавание', totalWorkers: 150 },
  {id: 44, categoryId: 5, title: 'Бодибилдинг', totalWorkers: 150 },
  {id: 45, categoryId: 5, title: 'Бадминтон', totalWorkers: 150 },
  {id: 46, categoryId: 5, title: 'Теннис', totalWorkers: 150 },
  {id: 47, categoryId: 5, title: 'Сквош', totalWorkers: 150 },
  {id: 48, categoryId: 5, title: 'Футбол', totalWorkers: 150 },
  {id: 49, categoryId: 5, title: 'Дзюдо', totalWorkers: 150 },

  {id: 50, categoryId: 6, title: 'Вождение (МКПП)', totalWorkers: 150 },
  {id: 51, categoryId: 6, title: 'Вождение (АКПП)', totalWorkers: 150 },
  {id: 52, categoryId: 6, title: 'Вождение мотоцикла', totalWorkers: 150 },
  {id: 53, categoryId: 6, title: 'Теория ПДД', totalWorkers: 150 },
  {id: 54, categoryId: 6, title: 'Контраварийное вождение', totalWorkers: 150 },
  {id: 55, categoryId: 6, title: 'Экстремальное вождение', totalWorkers: 150 },
  {id: 56, categoryId: 6, title: 'Вождение грузовиков', totalWorkers: 150 },
  {id: 57, categoryId: 6, title: 'Вождение спецтранспорта', totalWorkers: 150 },
  {id: 58, categoryId: 6, title: 'Вождение водного транспорта', totalWorkers: 150 },

  {id: 59, categoryId: 7, title: 'Ветеринарные врачи', totalWorkers: 150 },
  {id: 60, categoryId: 7, title: 'Ветеринарные неврологи', totalWorkers: 150 },
  {id: 61, categoryId: 7, title: 'Ветеринарные стоматологи', totalWorkers: 150 },
  {id: 62, categoryId: 7, title: 'Ветеринарные офтальмологи', totalWorkers: 150 },
  {id: 63, categoryId: 7, title: 'Груммеры', totalWorkers: 150 },
  {id: 64, categoryId: 7, title: 'Кинологи', totalWorkers: 150 },
  {id: 65, categoryId: 7, title: 'Ветеринарные фельдшеры', totalWorkers: 150 },
  {id: 66, categoryId: 7, title: 'Иппологи', totalWorkers: 150 },
  {id: 67, categoryId: 7, title: 'Аквариумисты', totalWorkers: 150 },
  {id: 68, categoryId: 7, title: 'Дрессировщики', totalWorkers: 150 },

  {id: 69, categoryId: 8, title: 'Адвокаты', totalWorkers: 150 },
  {id: 70, categoryId: 8, title: 'Нотариусы', totalWorkers: 150 },
  {id: 71, categoryId: 8, title: 'Профильные юристы', totalWorkers: 150 },
  {id: 72, categoryId: 8, title: 'Регистраторы', totalWorkers: 150 },
  {id: 73, categoryId: 8, title: 'Экономисты', totalWorkers: 150 },
  {id: 74, categoryId: 8, title: 'Бухгалтеры', totalWorkers: 150 },
  {id: 75, categoryId: 8, title: 'Аудиторы', totalWorkers: 150 },
  {id: 76, categoryId: 8, title: 'Бизнес консультанты', totalWorkers: 150 },
  {id: 77, categoryId: 8, title: 'Маркетологи', totalWorkers: 150 },
  {id: 78, categoryId: 8, title: 'Налоговые консультанты', totalWorkers: 150 },

  {id: 79, categoryId: 9, title: 'Программисты', totalWorkers: 150 },
  {id: 80, categoryId: 9, title: 'СЕО специалисты', totalWorkers: 150 },
  {id: 81, categoryId: 9, title: 'Верстальщики', totalWorkers: 150 },
  {id: 82, categoryId: 9, title: 'Веб дизанеры', totalWorkers: 150 },
  {id: 83, categoryId: 9, title: 'Менеджеры проектов', totalWorkers: 150 },
  {id: 84, categoryId: 9, title: 'Копирайтеры', totalWorkers: 150 },
  {id: 85, categoryId: 9, title: 'Системные администраторы', totalWorkers: 150 },
  {id: 86, categoryId: 9, title: 'Редакторы сайтов', totalWorkers: 150 },

  {id: 87, categoryId: 10, title: 'Вокалисты', totalWorkers: 150 },
  {id: 88, categoryId: 10, title: 'Танцоры', totalWorkers: 150 },
  {id: 89, categoryId: 10, title: 'Ведущие', totalWorkers: 150 },
  {id: 90, categoryId: 10, title: 'Организаторы', totalWorkers: 150 },
  {id: 91, categoryId: 10, title: 'Арендаторы оборудования', totalWorkers: 150 },
  {id: 92, categoryId: 10, title: 'Цирковые артисты', totalWorkers: 150 },
  {id: 93, categoryId: 10, title: 'Аниматоры', totalWorkers: 150 },
  {id: 94, categoryId: 10, title: 'Шоу', totalWorkers: 150 },
  {id: 95, categoryId: 10, title: 'Художники', totalWorkers: 150 },
  {id: 96, categoryId: 10, title: 'Пиротехники', totalWorkers: 150 },

  {id: 97, categoryId: 11, title: 'Домработницы', totalWorkers: 150 },
  {id: 98, categoryId: 11, title: 'Садовники', totalWorkers: 150 },
  {id: 99, categoryId: 11, title: 'Охранники', totalWorkers: 150 },
  {id: 100, categoryId: 11, title: 'Повара', totalWorkers: 150 },
  {id: 101, categoryId: 11, title: 'Экономки', totalWorkers: 150 },
  {id: 102, categoryId: 11, title: 'Водители', totalWorkers: 150 },
  {id: 103, categoryId: 11, title: 'Мытье окон', totalWorkers: 150 },
  {id: 104, categoryId: 11, title: 'Сиделки', totalWorkers: 150 },
  {id: 105, categoryId: 11, title: 'Няни', totalWorkers: 150 },
  {id: 106, categoryId: 11, title: 'Помощники', totalWorkers: 150 },
];

export class CategoryService {

  getOne(id: number): Observable<Category> {
    let category = categories.filter(category => category.id === Number(id))[0];
    return Observable.of(category);
  }

  getAll(): Observable<Category[]> {
    return Observable.of(categories);
  }

  getSpecialities(categoryId: number): Observable<Speciality[]> {
    let filteredSpecialities = specialities.filter(speciality => speciality.categoryId === categoryId);
    return Observable.of(filteredSpecialities);
  }

  getSpeciality(specialityId: number): Observable<Speciality> {
    let speciality = specialities.filter(speciality => speciality.id === Number(specialityId))[0];
    return Observable.of(speciality);
  }

}
