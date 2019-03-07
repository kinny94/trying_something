import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
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
export class ProblemComponent implements OnInit, OnDestroy {

  problem ?: Observable<string>;
  content: Content;
  subscription: Subscription;

  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const topic = this.route.snapshot.url[0].path;
    const prob = this.route.snapshot.url[1].path;
    this.problem = this.problemService.getProblemString(topic, prob);
    if ( this.problem ) {
      this.subscription = this.problem.pipe(
        map(data => this.parseContent(data['content']))
      ).subscribe((data: Content) => this.content = data);
    }
  }

  ngOnDestroy() {
    if (this.problem) {
      this.subscription.unsubscribe();
    }
  }

  parseContent(data: string) {
    let readingTitle = false;
    const content: Content = {
      code: '',
      title: ''
    };

    for (let i = 0; i < data.length; i++) {
      if (data[i] === '/' && data[i + 1] === '*') {
        i = i + 2;
        readingTitle = true;
      }

      if (data[i] === '*' && data[i + 1] === '/') {
        i = i + 2;
        readingTitle = false;
      }

      if (readingTitle) {
        content.title = content.title + data[i];
      } else {
        content.code = content.code + data[i];
      }
    }
    return content;
  }

}
