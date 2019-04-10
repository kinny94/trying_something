import { Component, OnInit, Input } from '@angular/core';
import { ProblemKeyValue } from './../../../models/model';
import { Globals } from './../../global';
import { UserService } from './../../services/user-service/user.service';
import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input() problem: ProblemKeyValue;
  color: Observable<string>;
  private snackBarDuration = 2000;

  constructor(
    private globals: Globals,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    if (this.globals.user) {
      if (this.globals.userData.likedProblems && this.globals.userData.likedProblems[this.problem.key]) {
        this.color = of('warn');
      }
    }
  }

  onClick() {
    if (this.globals.user) {
      if (this.globals.userData.likedProblems && this.globals.userData.likedProblems[this.problem.key]) {
        this.userService.unlikeProblem(this.globals.currentUser, this.problem).then(() => {
          this.color = of('');
          this.snackBar.open(`You unliked ${this.problem.value.name}`, '', {
            duration: this.snackBarDuration
          });
        });
      } else {
        this.userService.likeProblem(this.globals.currentUser, this.problem).then(() => {
          this.color = of('warn');
          this.snackBar.open(`You liked ${this.problem.value.name}`, '', {
            duration: this.snackBarDuration,
          });
        });
      }
    } else {
      this.snackBar.open(`You need to login to like a problem.`, '', {
        duration: this.snackBarDuration
      });
    }
  }

}
