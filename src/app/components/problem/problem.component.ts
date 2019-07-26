import { HttpClient } from '@angular/common/http';
import { map, switchMap, flatMap, take } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProblemData } from './../../../models/model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { ProblemsService } from './../../services/problems/problems.service';

export interface Content {
  code: Observable<string>;
  language: string;
}

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit, OnDestroy {

  problem$ ?: Observable<ProblemData>;
  testObservable?: Observable<ProblemData>;
  content$ ?: Observable<any>;
  program$?: Observable<Content[]>;
  subscription?: Subscription;
  data?: string;

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
        return this.storage.ref(`${problem.topic}/${problem.id}/java/${problem.id}.java`).getDownloadURL();
      }),
      switchMap((obser: Observable<string>) =>
        obser.pipe(
          map(data => {
            return data;
          })
        )
      ),
      flatMap((url: string) => this.http.get<string>(url, { responseType: 'text' as 'json' }))
    );

    this.program$ = this.problem$.pipe(
      map((problem: ProblemData) => {
        let lanagugeDownloadURLs: Content[] = [];
        if (problem.storageUrl.java) {
          lanagugeDownloadURLs = [
            ...lanagugeDownloadURLs,
            {
              language: 'Java',
              code: this.getProgramCode(of(`${problem.topic}/${problem.id}/java/${problem.id}.java`)),
          }];
        }

        if (problem.storageUrl.typescript) {
          lanagugeDownloadURLs = [
            ...lanagugeDownloadURLs,
            {
              language: 'TypeScript',
              code: this.getProgramCode(of(`${problem.topic}/${problem.id}/typescript/${problem.id}.ts`)),
          }];
        }

        if (problem.storageUrl.javascript) {
          lanagugeDownloadURLs = [
            ...lanagugeDownloadURLs,
            {
              language: 'Javascript',
              code: this.getProgramCode(of(`${problem.topic}/${problem.id}/javascript/${problem.id}.js`))
          }];
        }

        if (problem.storageUrl.python) {
          lanagugeDownloadURLs = [
            ...lanagugeDownloadURLs,
            {
              language: 'Python',
              code: this.getProgramCode(of(`${problem.topic}/${problem.id}/python/${problem.id}.py`))
          }];
        }
        return lanagugeDownloadURLs;
      })
    );

    this.subscription = this.problem$.subscribe((data) => {
      this.data = data.description;
    });

    this.program$.subscribe(console.log);
  }

  getProgramCode(storageUrl: Observable<string>): Observable<string> {
    return storageUrl.pipe(
      map((url: string) => {
        return this.storage.ref(url).getDownloadURL();
      }),
      switchMap((obser: Observable<string>) =>
        obser.pipe(
          map(data => {
            return data;
          })
        )
      ),
      flatMap((url: string) => this.http.get<string>(url, { responseType: 'text' as 'json' })));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
