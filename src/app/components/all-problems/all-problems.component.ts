import { Component, OnInit } from '@angular/core';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { AngularFireList } from '@angular/fire/database';
import { TopicProblems } from 'src/models/model';

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

  _filteredProblems?: Observable<Array<string>>;

  _everyProblemsSubject: BehaviorSubject<Array<string>> = new BehaviorSubject([]);
  _everyProblem$: Observable<Array<string>> = this._everyProblemsSubject.asObservable();
  searchText = '';

  constructor(
    private problemService: ProblemsService
  ) { }

  ngOnInit() {
    this.problemService.getEverything().valueChanges().pipe(
      map(element => {
        element.forEach(elem => {
          this.printValues(elem);
        });
      }),
    ).subscribe();
    this._filteredProblems = this._everyProblem$;
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

  printValues(obj: Object) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        this.printValues(obj[key]);
      } else {
        if (key === 'name') {
          const currentProblems: Array<string> = this._everyProblemsSubject.getValue();
          const newProblems: Array<string> = [...currentProblems, obj[key]];
          this._everyProblemsSubject.next(newProblems);
        }
      }
    }
  }
}
