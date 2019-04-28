import { HttpClient } from '@angular/common/http';
import { map, switchMap, flatMap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProblemData } from './../../../models/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProblemsService } from './../../services/problems/problems.service';

export interface Content {
  code: string;
  title: string;
}
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  problem$ ?: Observable<ProblemData>;
  testObservable?: Observable<ProblemData>;
  content$ ?: Observable<any>;

  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const topic = this.route.snapshot.params.topic;
    const id = this.route.snapshot.params.id;

    this.problem$ = this.problemService.getProblem(topic, id).valueChanges();
    this.content$ = this.problem$.pipe(
      map((problem: ProblemData) => {
        return this.storage.ref(`${problem.topic}/${problem.storageUrl}.java`).getDownloadURL()}),
      switchMap((obser: Observable<string>) =>
        obser.pipe(
          map(data => data)
        )
      ),
      flatMap((url: string) => this.http.get<string>(url, { responseType: 'text' as 'json' }))
    );
  }
}
