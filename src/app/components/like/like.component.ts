import { map, flatMap, take, switchMap } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ProblemKeyValue, UserData } from './../../../models/model';
import { UserService } from './../../services/user-service/user.service';
import { MatSnackBar } from '@angular/material';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit, OnDestroy {

  @Input()
  problem: ProblemKeyValue;

  color: Observable<string>;
  isLikedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isLiked: Observable<boolean> = this.isLikedSubject.asObservable();

  user$: Observable<string>;
  userdata$: Observable<UserData>;
  currentUserSubject: BehaviorSubject<string> = new BehaviorSubject(undefined);

  subscription: Subscription;

  constructor(
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
      flatMap(data => {
        if (data.likedProblems) {
          return of(!!data.likedProblems[this.problem.key]);
        }
        return of(false);
      }),
      map(isLiked => {
        this.isLikedSubject.next(isLiked);
        return this.isLikedSubject.value ? 'warn' : '';
      }),
    );
  }

  unauthClick() {
    this.snackBar.open(`Login or Signup to like a problem.`, '', {
      duration: 2000,
    });
  }

  authClick() {
    this.subscription = this.userdata$.pipe(
      map((userdata: UserData) => {
        this.currentUserSubject.next(userdata.username);
        return userdata;
      }),
      switchMap((data) => {
        if (data.likedProblems) {
          return of(!!data.likedProblems[this.problem.key]);
        }
        return of(false);
      }),
      map(isLiked => {
        if (isLiked) {
          this.userService.unlikeProblem(this.currentUserSubject.value, this.problem).then(() => {
            this.color = of('');
            this.snackBar.open(`You unliked ${this.problem.value.name}`, '', {
              duration: 2000,
            });
          });
        } else {
          this.userService.likeProblem(this.currentUserSubject.value, this.problem).then(() => {
            this.color = of('warn');
            this.snackBar.open(`You liked ${this.problem.value.name}`, '', {
              duration: 2000,
            });
          });
        }
      }),
      take(1),
    ).subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
