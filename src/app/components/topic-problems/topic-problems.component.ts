import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic-problems',
  templateUrl: './topic-problems.component.html',
  styleUrls: ['./topic-problems.component.scss']
})
export class TopicProblemsComponent implements OnInit {

  @Input()
  item: any;

  starCount = 5;
  starColor = 'accent';

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    return name.replace(/\s/g, '').trim();
  }
}
