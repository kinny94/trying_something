import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DsDesctiption } from './../../../models/model';

@Injectable({
  providedIn: 'root'
})
export class MainComponentService {

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<DsDesctiption[]> {
    return this.http.get<DsDesctiption[]>('/api');
  }
}
