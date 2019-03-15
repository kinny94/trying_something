import { ProblemData } from 'src/models/model';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProblemData } from './../../../models/model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProblemsService } from 'src/app/services/problems/problems.service';

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
  _content$ ?: Observable<Object>;
  private _ref ?: Observable<string>;

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
    this.testObservable = this.problem$;
    this.testObservable.pipe(
      map(problem => {
        const ref = this.storage.ref(`${problem.topic}/${problem.storageUrl}.java`);
        return ref;
      }),
      tap(data => {
        data.getDownloadURL().pipe(
          map(url => {
            this._content$ = this.http.get(url,  { responseType: 'text' as 'json' });
            console.log(this._content$);
          })
        ).subscribe();
      })
    ).subscribe();

    // this._content$.subscribe(data => console.log(data));

    // const ref = this.storage.ref('array/HelloArray.java');
    // ref.getDownloadURL().subscribe(data => {
    //     this.http.get(data, { responseType: 'text' as 'json' }).subscribe(text => console.log(text));
    //   }
    // );
  }

}
