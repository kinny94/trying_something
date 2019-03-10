import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import { problems } from 'problems/problems';
import { of, Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { UploadData } from '../upload-services/upload.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) { }

  getAllProblems(topic: string) : AngularFireList<UploadData> {
    return this.db.list(`/problems/${topic}`);
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
