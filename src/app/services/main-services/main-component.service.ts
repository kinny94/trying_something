import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DsDesctiption } from './../../../models/model';
import { DESCRIPTION } from './../../model';

export interface Topic {
  name: string;
  desc: string;
}
@Injectable({
  providedIn: 'root'
})
export class MainComponentService {

  constructor(
    private http: HttpClient,
  ) {}

  getAllTopics(): Observable<DsDesctiption[]> {
    return this.http.get<DsDesctiption[]>('/api');
  }

  getAllTopicAndDescription() {
    return of([...DESCRIPTION]);
  }
}
