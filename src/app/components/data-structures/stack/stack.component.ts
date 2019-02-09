import { Component, OnInit } from '@angular/core';
import { Complexities, Files } from 'src/models/model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from 'src/app/services/problems/problems.service';

const ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Access (Average)', complexity_avg: 'O(n)', type_worst: 'Access (Worst)', complexity_worst: 'O(n)'},
  {type_avg: 'Search (Average)', complexity_avg: 'O(n)', type_worst: 'Search (Worst)', complexity_worst: 'O(n)'},
  {type_avg: 'Insertion (Average)', complexity_avg: 'O(1)', type_worst: 'Insertion (Worst)', complexity_worst: 'O(1)'},
  {type_avg: 'Deletion (Average)', complexity_avg: 'O(1)', type_worst: 'Deletion (Worst)', complexity_worst: 'O(1)'},
];

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

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
