import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Complexities, TopicProblems } from './../../../../models/model';
import { ProblemsService } from './../../../services/problems/problems.service';
import { ActivatedRoute } from '@angular/router';

const ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Add Vertex (Average)', complexity_avg: 'O(1)', type_worst: 'Add Vertex (Worst)', complexity_worst: 'O(1)'},
  {type_avg: 'Add Edge (Average)', complexity_avg: 'O(1)', type_worst: 'Add Edge (Worst)', complexity_worst: 'O(n)'},
  {
    type_avg: 'Remove Vertex (Average)', complexity_avg: 'O(|V| + |E|)',
    type_worst: 'Remove Vertex (Worst)', complexity_worst: 'O(|V| + |E|)'
  },
  {type_avg: 'Deletion (Average)', complexity_avg: 'O(n)', type_worst: 'Deletion (Worst)', complexity_worst: 'O s(n)'},
];

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  _allProblems ?: Observable<TopicProblems>;
  displayedColumns: string[] = ['type_avg', 'complexity_avg', 'type_worst', 'complexity_worst'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: ActivatedRoute,
    private problem: ProblemsService
  ) { }

  ngOnInit() {
    const currentTopic = this.router.snapshot.routeConfig.path;
    this._allProblems = this.problem.getAllProblems(currentTopic).valueChanges();
  }
}
