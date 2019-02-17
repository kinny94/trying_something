import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ProblemsService } from 'src/app/services/problems/problems.service';

export interface Content{
  code: string,
  title: string,
}
@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  problem ?: Observable<string>;
  content ?: Observable<Content>;

  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const topic = this.route.snapshot.url[0].path;
    const problem = this.route.snapshot.url[1].path;
    this.problem = this.problemService.getProblemString(topic, problem);
    this.content = this.problem.pipe(
      map(data => this.parseContent(data['content']))
    );
  }

  parseContent(data: string) {
    let readingTitle = false;
    let content:Content = {
      code: '',
      title: '',
    }

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
