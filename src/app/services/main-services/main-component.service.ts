import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainComponentService {

  constructor(private http: HttpClient) {}

  getAllTopics() {
    return this.http.get('assets/problems/').subscribe(data => console.log(data));
  }

}
