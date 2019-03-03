import { Component, OnInit } from '@angular/core';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

export interface Problem {
  name: string;
  topic: string;
}

@Component({
  selector: 'app-all-problems',
  templateUrl: './all-problems.component.html',
  styleUrls: ['./all-problems.component.scss']
})
export class AllProblemsComponent implements OnInit {

  _filteredProblems?: Observable<{}>;
  _allProblems?: Observable<{}>;
  searchText = '';

  constructor(
    private problemService: ProblemsService
  ) { }

  ngOnInit() {
    this._allProblems = this.problemService.getEverything();
    this._filteredProblems = this._allProblems;
  }

  changeName(name: string) {
    return name.replace(/([A-Z])/g, ' $1').trim();
  }

  filterProblems() {
    if (this.searchText === '') {
      this._filteredProblems = this._allProblems;
    }

    this._filteredProblems = this._allProblems.pipe(
      map((problems: Problem[]) => 
        problems.filter((problem: Problem) => 
          this.changeName(problem.name).toLowerCase().includes(this.searchText.toLowerCase())))
    );
  }
}
