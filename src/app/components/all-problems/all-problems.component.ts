import { Component, OnInit } from '@angular/core';
import { ProblemsService } from 'src/app/services/problems/problems.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-problems',
  templateUrl: './all-problems.component.html',
  styleUrls: ['./all-problems.component.scss']
})
export class AllProblemsComponent implements OnInit {

  _allProblems?: Observable<{}>;

  constructor(
    private problemService: ProblemsService
  ) { }

  ngOnInit() {
    this._allProblems = this.problemService.getEverything();
  }

  changeName(name) {
    return name.replace(/([A-Z])/g, ' $1').trim();
  }
}
