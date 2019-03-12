import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { problems } from 'problems/problems';
import { of } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { TopicProblems } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) { }

  getAllProblems(topic: string): AngularFireObject<TopicProblems> {
    return this.db.object(`/problems/${topic}`);
  }

  getProblemString(topic: string, problem: string) {
    return this.http.get<string>(`/api/${topic}/${problem}`);
  }

  getEverything(){
    const allProblems = [];
    for (const key in problems) {
      if (key) {
        problems[key].forEach(problem => {
          allProblems.push({'name': problem.name, 'topic': problem.topic})
        });
      }
    }
    return of(allProblems);
  }
}
