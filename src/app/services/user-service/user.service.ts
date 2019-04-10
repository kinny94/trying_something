import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UserData, Username, ProblemKeyValue } from './../../../models/model';

import { User } from 'firebase';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(userData: UserData) {
    return this.db.object(`/users/${userData.username}`).update(userData);
  }

  saveUsername(userData: UserData) {
    return this.db.object(`/usernames/${userData.username}`).update({'email': userData.email });
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

  isRatedProblem(currentUser:string, problem: ProblemKeyValue) {
    return this.db.list(`/users/${currentUser}/ratedProblems/${problem.key}`).valueChanges();
  }

  addRating(currentUser: string, problem: ProblemKeyValue, rating: number) {
    return this.db.list(`/users/${currentUser}/ratedProblems/`).set(problem.key, rating);
  }

  likeProblem(currentUser: string, problem: ProblemKeyValue) {
    return this.db.list(`/users/${currentUser}/likedProblems/`).set(problem.key, true);
  }

  unlikeProblem(currentUser: string, problem: ProblemKeyValue) {
    return this.db.list(`/users/${currentUser}/likedProblems/`).remove(problem.key);
  }

  checkProblemLiked(currentUser: string, problem: ProblemKeyValue) {
    return this.db.list(`/users/${currentUser}/likedProblems/${problem.key}`);
  }
}
