import { Component, OnInit } from '@angular/core';
import { Complexities, TopicProblems } from 'src/models/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from 'src/app/services/problems/problems.service';

const ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Linear Search (Average)', complexity_avg: 'O(n)', type_worst: 'Linear Search (Worst)', complexity_worst: 'O(n)'},
  {type_avg: 'Binary Search (Average)', complexity_avg: 'O(log(n))', type_worst: 'Linear Search (Worst)', complexity_worst: 'O(log(n))'},
];

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {

  _allProblems ?: Observable<TopicProblems>;
  displayedColumns: string[] = ['type_avg', 'complexity_avg', 'type_worst', 'complexity_worst'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: ActivatedRoute,
    private problem: ProblemsService
  ) { }

  ngOnInit() {
    const currentTopic = `/algorithms/${this.router.snapshot.routeConfig.path}`;
    this._allProblems = this.problem.getAllProblems(currentTopic).valueChanges();
  }

  changeName(name: string) {
    return name.replace(/\s/g, '').trim();
  }
}
