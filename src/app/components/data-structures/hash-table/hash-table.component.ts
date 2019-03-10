import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Files, Complexities } from 'src/models/model';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { ActivatedRoute } from '@angular/router';
import { UploadData } from 'src/app/services/upload-services/upload.service';

const ELEMENT_DATA: Complexities[] = [
  {type_avg: 'Access (Average)', complexity_avg: 'N/A', type_worst: 'Access (Worst)', complexity_worst: 'N/A'},
  {type_avg: 'Search (Average)', complexity_avg: 'Θ(1)', type_worst: 'Search (Worst)', complexity_worst: 'Θ(n)'},
  {type_avg: 'Insertion (Average)', complexity_avg: 'Θ(1)', type_worst: 'Insertion (Worst)', complexity_worst: 'Θ(n)'},
  {type_avg: 'Deletion (Average)', complexity_avg: 'Θ(1)', type_worst: 'Deletion (Worst)', complexity_worst: 'Θ(n)'},
];

@Component({
  selector: 'app-hash-table',
  templateUrl: './hash-table.component.html',
  styleUrls: ['./hash-table.component.scss']
})
export class HashTableComponent implements OnInit {

  _allProblems ?: Observable<UploadData[]>;
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

  changeName(name: string) {
    return name.replace(/\s/g, '').trim();
  }
}
