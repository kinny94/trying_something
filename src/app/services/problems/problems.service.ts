import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { problems } from 'problems/problems';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private http: HttpClient) { }

  getAllProblems(topic: string) {
    const problemNames = [];
    problems[topic].forEach((problem) => {
      problemNames.push(problem.name)
    });
    return of(problemNames);
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
