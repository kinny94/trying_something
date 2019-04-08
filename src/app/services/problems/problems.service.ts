import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

import { TopicProblems, ProblemData, ProblemKeyValue } from './../../../models/model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getAllProblems(topic: string): AngularFireObject<TopicProblems> {
    return this.db.object(`/problems/${topic}`);
  }

  getProblem(topic: string, id: string): AngularFireObject<ProblemData> {
    return this.db.object(`/problems/${topic}/${id}`);
  }

  getEverything(): AngularFireList<TopicProblems> {
    return this.db.list('/problems');
  }

  upadteProblem(problem: ProblemKeyValue, rating: Number, ) {
    this.db.list(`/problems/${problem.value.topic}/${problem.key}`).set('stars', rating);
  }

  setNewRatings(problem: ProblemKeyValue, newRating: number) {
    return this.db.object(`/problems/${problem.value.topic}/${problem.key}/`).valueChanges().pipe(
      map((currentProblem: ProblemData) => {
        const newStars = currentProblem.stars + newRating;
        const newRaters = currentProblem.raters + 1;
        return {stars: newStars, raters: newRaters};
      }),
    );
  }

  addNewRatings(problem: ProblemKeyValue, newRatings: Object) {
    console.log(problem)
    //this.db.object(`/problems/${problem.value.topic}/${problem.key}/`).update(newRatings);
  }
}
