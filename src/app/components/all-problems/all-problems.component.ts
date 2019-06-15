import { Component, OnInit } from '@angular/core';
import { ProblemsService } from './../../services/problems/problems.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user-service/user.service';
import { UserData } from 'src/models/model';

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

  _filteredProblems$?: Observable<Array<Object>>;
  _everyProblemsSubject: BehaviorSubject<Array<Object>> = new BehaviorSubject<Array<Object>>([]);
  _everyProblem$: Observable<Array<Object>> = this._everyProblemsSubject.asObservable();

  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  _isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();
  userdata$: Observable<UserData>;

  searchText = '';
    starColor = 'accent';

    constructor(
      private problemService: ProblemsService,
      private userService: UserService,
  ) { }

  ngOnInit() {
    this.userdata$ = this.userService.getUserData();
    this._everyProblem$ = this.problemService.getEverything().valueChanges().pipe(
      map(element => element),
      tap(data => {
        this.isLoadingSubject.next(false);
        return this._everyProblemsSubject.next(data);
      }),
      take(1)
    );
    this._filteredProblems$ = this._everyProblem$;
  }

  changeName(name: string) {
    return name.toLowerCase().replace(/ /g, '-').trim();
  }

  filterProblems() {
    if (this.searchText === '') {
      this._filteredProblems$ = this._everyProblem$;
    }

    this._filteredProblems$ = this._everyProblem$.pipe(
      map((data) => {
        return data.filter((item) =>
          Object.values(item).some((prob) => {
              if (prob.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                return prob;
              }
            }
          )
        );
      }),
    );
  }

}