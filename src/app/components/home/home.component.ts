import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cont = 'hello';
  desc = 'This is the description';

  constructor() { }

  ngOnInit() {
  }

}
