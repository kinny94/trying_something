import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { UserData, ProblemData } from 'src/models/model';
import { map, flatMap, switchMap, mergeMap } from 'rxjs/operators';
import { ProblemsService } from 'src/app/services/problems/problems.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userdata$: Observable<UserData>;
  likedProblems$: Observable<Object>;
  ratedProblems$: Observable<Object>;

  constructor(
    private userService: UserService,
    private problemService: ProblemsService,
  ) { }

  ngOnInit() {
    this.userdata$ = this.userService.getUserData();
    this.likedProblems$ = this.userdata$.pipe(
      map((userdata: UserData) => {
        return userdata.likedProblems;
      }),
    );
    this.ratedProblems$ = this.userdata$.pipe(
      map((userdata: UserData) => {
        return userdata.ratedProblems;
      }),
    );
  }

}
