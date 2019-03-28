import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'selenium-webdriver';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  @Input() private rating = 3;
  @Input() private starCount = 5;
  @Input() private color = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration = 2000;
  private ratingArr = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
