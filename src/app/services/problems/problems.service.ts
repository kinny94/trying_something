import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Files } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(private http: HttpClient) { }

  getAllProblems(topic: string) {
    return this.http.get<Files[]>(`/api/${topic}`);
  }
}
