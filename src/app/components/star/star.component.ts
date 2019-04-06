import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProblemData, ProblemKeyValue } from './../../../models/model';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StarComponent implements OnInit {

  @Input()
  private rating: number;
  @Input()
  private starCount = 5;
  @Input()
  private color = 'accent';
  @Input()
  problem: ProblemKeyValue;

  private snackBarDuration = 2000;
  private ratingArr = [];
  user$: Observable<firebase.User>;

  constructor(
    private snackBar: MatSnackBar,
    private problemService: ProblemsService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.user$ = this.authService.user$;
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {

    this.problemService.upadteProblem(this.problem, rating);
    this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.rating = rating;
    return false;
  }

  loginFirst() {
    this.snackBar.open('Login to rate the problems', '', {
      duration: this.snackBarDuration
    });
  }

  showIcon(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = 'primary',
  accent = 'accent',
  warn = 'warn'
}
