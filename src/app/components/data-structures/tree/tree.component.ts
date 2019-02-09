import { Component, OnInit } from '@angular/core';
import { Complexities, Files } from 'src/models/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from 'src/app/services/problems/problems.service';

const ELEMENT_DATA: Complexities[] = [
  {
    type_avg: 'Binary Search Tree Access (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Access (Worst)', complexity_worst: 'O(log(n))'
  },
  {
    type_avg: 'Binary Search Tree Search (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Search (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Binary Search Tree Insertion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Insertion (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Binary Search Tree Deletion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Binary Search Tree Deletion (Worst)', complexity_worst: 'O(n)'
  },
  {
    type_avg: 'Red-Black Tree Access (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Access (Worst)', complexity_worst: 'Θ(log(n))'
  },
  {
    type_avg: 'Red-Black Tree Search (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Search (Worst)', complexity_worst: 'Θ(log(n))'
  },
  {
    type_avg: 'Red-Black Tree Insertion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Insertion (Worst)', complexity_worst: 'Θ(log(n))'
  },
  {
    type_avg: 'Red-Black Tree Deletion (Average)', complexity_avg: 'Θ(log(n))',
    type_worst: 'Red-Black Tree Deletion (Worst)', complexity_worst: 'Θ(log(n))'
  },
];


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  _allProblems ?: Observable<Files[]>;
  displayedColumns: string[] = ['type_avg', 'complexity_avg', 'type_worst', 'complexity_worst'];
  dataSource = ELEMENT_DATA;

  constructor(
    private router: ActivatedRoute,
    private problem: ProblemsService
  ) { }

  ngOnInit() {
    const currentTopic = this.router.snapshot.routeConfig.path;
    this._allProblems = this.problem.getAllProblems(currentTopic);
  }


}
