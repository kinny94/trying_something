import { Component, OnInit } from '@angular/core';
import { Complexities, TopicProblems } from './../../../../models/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from './../../../services/problems/problems.service';

const ELEMENT_DATA: Complexities[] = [
  {
    type_avg: 'Singly-Linked-List Access (Average)', complexity_avg: 'O(n)',
    type_worst: 'Singly-Linked-List Access (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Singly-Linked-List Search (Average)', complexity_avg: 'O(n)',
    type_worst: 'Singly-Linked-List Search (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Singly-Linked-List Insertion (Average)', complexity_avg: 'O(1)',
    type_worst: 'Singly-Linked-List Insertion (Worst)', complexity_worst: 'O(1)'
  },
  {
    type_avg: 'Singly-Linked-List Deletion (Average)', complexity_avg: 'O(1)',
    type_worst: 'Singly-Linked-ListDeletion (Worst)', complexity_worst: 'O(1)'
  },
  {
    type_avg: 'Doubly-Linked-List Access (Average)', complexity_avg: 'O(n)',
    type_worst: 'Doubly-Linked-List Access (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Doubly-Linked-List Search (Average)', complexity_avg: 'O(n)',
    type_worst: 'Doubly-Linked-List Search (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Doubly-Linked-List Insertion (Average)', complexity_avg: 'O(1)',
    type_worst: 'Doubly-Linked-List Insertion (Worst)', complexity_worst: 'O(1)'
  },
  {
    type_avg: 'Doubly-Linked-List Deletion (Average)', complexity_avg: 'O(1)',
    type_worst: 'Doubly-Linked-List Deletion (Worst)', complexity_worst: 'O(1)'
  }
];

@Component({
  selector: 'app-linkedlist',
  templateUrl: './linkedlist.component.html',
  styleUrls: ['./linkedlist.component.scss']
})
export class LinkedlistComponent implements OnInit {

  _allProblems ?: Observable<TopicProblems>;
  displayedColumns: string[] = ['type_avg', 'complexity_avg', 'type_worst', 'complexity_worst'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: ActivatedRoute,
    private problem: ProblemsService
  ) { }

  ngOnInit() {
    const currentTopic = this   .router.snapshot.routeConfig.path;
    this._allProblems = this.problem.getAllProblems(currentTopic).valueChanges();
  }
}
