import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProblemKeyValue } from './../../../models/model';
import { ProblemsService } from './../../services/problems/problems.service';
import { User } from 'firebase';
import { Globals } from './../../global';
import { UserService } from 'src/app/services/user-service/user.service';
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
  user: User;

  constructor(
    private snackBar: MatSnackBar,
    private problemService: ProblemsService,
    private globals: Globals,
    private userService: UserService
  ) { }

  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }

  onClick(rating: number) {
    let previousRating = this.rating;
    if (this.globals.user) {
      console.log(this.globals.userData);
      this.snackBar.open('You rated ' + rating + ' / ' + this.starCount, '', {
        duration: this.snackBarDuration
      });
      this.rating = rating;
      return false;
    } else {
      this.snackBar.open('Login to rate the problems', '', {
        duration: this.snackBarDuration
      });
    }
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
