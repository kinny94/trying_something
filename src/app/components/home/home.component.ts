import { HttpClient } from '@angular/common/http';
import { MainComponentService } from './../../services/main-services/main-component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cont = 'hello';
  desc = 'This is the description';
  data = {};

  constructor(private mainService: MainComponentService, private http: HttpClient) { }

  ngOnInit() {
    // this.http.get('assets/text.txt', {responseType: `text`}).subscribe(data => console.log(data));
    this.mainService.getAllTopics().subscribe(data => console.log(data));
  }

}
