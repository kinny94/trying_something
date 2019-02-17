import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ProblemsService } from 'src/app/services/problems/problems.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  problem ?: Observable<string>;
  content ?: Observable<{}>;

  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const topic = this.route.snapshot.url[0].path;
    const problem = this.route.snapshot.url[1].path;
    this.problem = this.problemService.getProblemString(topic, problem);
    this.problem.subscribe(data => {
        console.log(this.parseContent(data['content'])
      )
    });
  }

  parseContent(data: string) {
    console.log(data);
    let readingTitle = false;
    let code = '';
    let title = '';

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
        title = title + data[i];
      } else {
        code = code + data[i];
      }
    }
    return {code, title};
  }

}
