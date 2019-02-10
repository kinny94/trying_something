import { HttpClient } from '@angular/common/http';
import { MainComponentService } from './../../services/main-services/main-component.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DsDesctiption } from './../../../models/model';
import { ProblemsService } from 'src/app/services/problems/problems.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _topics?: Observable<DsDesctiption[]>;

  constructor(
    private mainService: MainComponentService,
    private http: HttpClient,
    private problem: ProblemsService,
  ) { }

  ngOnInit() {
    this._topics = this.mainService.getAllTopics();
    this.problem.getProblemString('array', 'Hello');
  }
}
