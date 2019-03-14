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

  problem ?: Observable<string>;
  content: Content;
  subscription: Subscription;

  constructor(
    private problemService: ProblemsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const topic = this.route.params.subscribe(params => console.log(params));
    // console.log(topic);

  }

}
