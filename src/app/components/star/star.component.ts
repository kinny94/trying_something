import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProblemKeyValue, UserData } from './../../../models/model';
import { ProblemsService } from './../../services/problems/problems.service';
import { User } from 'firebase';
import { UserService } from './../../services/user-service/user.service';
import { map, take, flatMap, switchMap } from 'rxjs/operators';
import { Subscription, Observable, BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit, OnDestroy {

  @Input()
  private rating: number;
  @Input()
  private starCount = 5;
  @Input()
  private color = 'accent';
  @Input()
  problem: ProblemKeyValue;

  private ratingArr = [];
  user: User;

  subscription: Subscription;

  user$: Observable<string>;
  userdata$: Observable<UserData>;
  currentUserSubject: BehaviorSubject<string> = new BehaviorSubject(undefined);


  constructor(
    private snackBar: MatSnackBar,
    private problemService: ProblemsService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.userdata$ = this.userService.getUserData();
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  authClick(rating: number) {
    const previousRating = this.rating;
    this.subscription = this.userdata$.pipe(
      map((userdata: UserData) => {
        this.currentUserSubject.next(userdata.username);
        return userdata;
      }),
      switchMap((data) => of(!!data.ratedProblems[this.problem.key])),
      flatMap(isRated => {
        if (isRated) {
          return this.problemService.changeRatings(this.problem, rating, previousRating);
        } else {
          return this.problemService.setNewRatings(this.problem, rating);
        }
      }),
      take(1),
      map(newRatings => {
        return this.problemService.addNewRatings(this.problem, newRatings);
      }),
      take(1),
      map(() => {
        return this.userService.addRating(this.currentUserSubject.value, this.problem, rating);
      }),
      take(1),
    ).subscribe();

    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: 2000,
    });
    this.rating = rating;
    return;
  }

  unauthClick() {
    this.snackBar.open('Login to rate the problems', '', {
      duration: 2000,
    });
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}
