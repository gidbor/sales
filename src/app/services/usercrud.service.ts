import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsercrudService {
  usersRef!: AngularFireList<any>;
  userRef!: AngularFireObject<any>;

  constructor(private angularFireDatabase: AngularFireDatabase) {}
  createUser(users: Users) {
    this.usersRef.push({
      name: users.name,
      lastName: users.lastName,
      age: users.age
    })
  }
}
