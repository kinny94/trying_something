import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database';

import { TopicProblems, ProblemData } from 'src/models/model';


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
}
