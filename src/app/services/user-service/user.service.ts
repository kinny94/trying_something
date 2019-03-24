import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserData, Username } from './../../../models/model';
import { map } from 'rxjs/operators';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(userData: UserData) {
    this.db.object(`/users/${userData.username}`).update(userData);
  }

  saveUsername(userData: UserData) {
    this.db.object(`/usernames/${userData.username}`).update({'email': userData.email });
  }

  updateData(data: UserData) {
    return this.db.object(`/users/${data.email}` ).update(data);
  }

  getAllUsers(): AngularFireList<User> {
    return this.db.list('/users');
  }

  userExists(): AngularFireList<Username> {
    return this.db.list('/usernames/');
  }

  isUsernameTaken(username: string) {
    return this.db.object(`/usernames/${username}`).valueChanges();
  }

}