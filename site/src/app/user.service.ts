import { UserModel } from './user.service';
import { Speciality, Category, CategoryService } from './category.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/reduce';

import { users } from '../data-mocks/users';

export interface Work {
  price: string;
  summary: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  score: number;
  specialityId: number;
  reviewsCount: number;
  photoCount: number;
  location: string;
  description: string;
  works: Work[];
}

export interface UserModel extends User {
  categoryId?: number;
  speciality?: Speciality;
  category?: Category;
}

export interface UserFilter {
  specialityId?: number;
  categoryId?: number;
  query?: string;
}

@Injectable()
export class UserService {

  constructor(
    private _categoryService: CategoryService
  ) { } 

  getOne(id: number) {
    return Observable.of(users.find(user => user.id === id))
      .switchMap((user: UserModel) => this._categoryService.getSpeciality(user.specialityId)
        .switchMap((speciality: Speciality) => {
          user.speciality = speciality;
          return Observable.of(user);
        })
      );
  }

  getAll(): Observable<UserModel[]> {
    return Observable.from(users).flatMap((user: UserModel) => {
      return this._categoryService.getSpeciality(user.specialityId)
        .switchMap((speciality: Speciality) => {
          user.speciality = speciality;
          return Observable.of(user);
        })
    })
    .reduce((users: UserModel[], user: UserModel) => {
      users.push(user)
      return users
    }, [])
  }

  getByFilter(filter: UserFilter) {
    return this.getAll().switchMap((_users: UserModel[]) => {
      const users = _users.filter((user: UserModel) => {
        const isNotSameSpeciality = filter.specialityId && Number(filter.specialityId) !== user.specialityId;
        const isNotSameCategory = filter.categoryId && Number(filter.categoryId) !== user.speciality.categoryId;
        
        if (isNotSameSpeciality || isNotSameCategory) {
          return false;
        }

        const areUsersFound = !(filter.query
          && !user.name.includes(filter.query)
          && !user.description.includes(filter.query)
          && !user.speciality.title.includes(filter.query)
        )
        return areUsersFound;
      })
      return Observable.of(users)
    })
  }
}
