import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserData } from './../../../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  addUserOnSignUp(userData: UserData, callback) {
    this.db.list('/users').push(userData);
    callback();
  }
}
