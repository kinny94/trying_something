import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Complexities, TopicProblems } from './../../../../models/model';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from './../../../services/problems/problems.service';

const ELEMENT_DATA: Complexities[] = [
  {
    type_avg: 'Quicksort (Average)', complexity_avg: 'Θ(nlog(n))',
    type_worst: 'Quicksort (Worst)', complexity_worst: 'O(n^2)'
  },
  {
    type_avg: 'Mergesort (Average)', complexity_avg: 'Θ(nlog(n))',
    type_worst: 'Mergesort (Worst)', complexity_worst: 'Θ(n log(n))'
  },
  {
    type_avg: 'Bubble Sort (Average)', complexity_avg: 'Θ(n^2)	',
    type_worst: 'Bubble Sort (Worst)', complexity_worst: 'Θ(n^2)'
  },
  {
    type_avg: 'Insertion Sort (Average)', complexity_avg: 'Θ(n^2)',
    type_worst: 'Insertion Sort (Worst)', complexity_worst: 'Θ(n^2)'
  },
  {
    type_avg: 'Selection Sort (Average)', complexity_avg: 'Θ(n^2)',
    type_worst: 'Selection Sort (Worst)', complexity_worst: 'Θ(n^2)'
  },
  {
    type_avg: 'Shell Sort (Average)', complexity_avg: 'Θ(n(log(n))^2)',
    type_worst: 'Shell Sort (Worst)', complexity_worst: 'Θ(n(log(n))^2)'
  },
  {
    type_avg: 'Insertion Sort (Average)', complexity_avg: 'Θ(n^2)',
    type_worst: 'Deletion (Worst)', complexity_worst: 'Θ(n^2)'
  },

];

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  _allProblems ?: Observable<TopicProblems>;
  displayedColumns: string[] = ['type_avg', 'complexity_avg', 'type_worst', 'complexity_worst'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: ActivatedRoute,
    private problem: ProblemsService
  ) { }

  ngOnInit() {
    const currentTopic = `${this.router.snapshot.routeConfig.path}`;
    this._allProblems = this.problem.getAllProblems(currentTopic).valueChanges();
  }

  changeName(name: string) {
    return name.replace(/\s/g, '').trim();
  }
}
