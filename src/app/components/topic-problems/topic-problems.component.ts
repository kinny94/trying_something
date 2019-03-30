import { Component, OnInit, Input } from '@angular/core';
import { TopicProblems } from './../../../models/model';

@Component({
  selector: 'app-topic-problems',
  templateUrl: './topic-problems.component.html',
  styleUrls: ['./topic-problems.component.scss']
})
export class TopicProblemsComponent implements OnInit {

  @Input()
  item: any;

  rating = 3;
  starCount = 5;
  starColor = 'accent';

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    return name.replace(/\s/g, '').trim();
  }

}
