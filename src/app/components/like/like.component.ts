import { User } from 'firebase';
import { map, filter, switchMap, flatMap } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { ProblemKeyValue, UserData, ProblemData } from './../../../models/model';
import { Globals } from './../../global';
import { UserService } from './../../services/user-service/user.service';
import { MatSnackBar } from '@angular/material';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input()
  problem: ProblemKeyValue;

  color: Observable<string>;
  isLikedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLiked: Observable<boolean> = this.isLikedSubject.asObservable();

  user$: Observable<string>;
  userdata$: Observable<UserData>;

  constructor(
    private globals: Globals,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.userdata$ = this.userService.getUserData();
    this.color = (this.user$ && this.userdata$) ? this.getColor() : undefined;
  }


  getColor() {
    return this.userService.getUserData().pipe(
      map((userdata: UserData) => userdata),
      flatMap(data => of(!!data.likedProblems[this.problem.key])),
      map(isLiked => this.isLikedSubject.next(isLiked)),
      map(() => this.isLikedSubject.value ? 'warn' : '')
    );
  }

  onClick() {
    if (this.globals.user) {
      if (this.globals.userData.likedProblems && this.globals.userData.likedProblems[this.problem.key]) {
        this.userService.unlikeProblem(this.globals.currentUser, this.problem).then(() => {
          this.color = of('');
          this.snackBar.open(`You unliked ${this.problem.value.name}`, '', {
            duration: 2000,
          });
        });
      } else {
        this.userService.likeProblem(this.globals.currentUser, this.problem).then(() => {
          this.color = of('warn');
          this.snackBar.open(`You liked ${this.problem.value.name}`, '', {
            duration: 2000,
          });
        });
      }
    } else {
      this.snackBar.open(`You need to login to like a problem.`, '', {
        duration: 2000,
      });
    }
  }

}
