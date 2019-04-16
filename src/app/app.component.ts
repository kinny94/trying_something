import { Component, OnInit } from '@angular/core';
import { Globals } from './global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codebase';
  data = '';

  constructor(private globals: Globals) {}

  ngOnInit() {}
}
