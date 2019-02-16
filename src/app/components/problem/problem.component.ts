import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.scss']
})
export class ProblemComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
