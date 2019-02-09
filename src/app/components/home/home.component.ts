import { HttpClient } from '@angular/common/http';
import { MainComponentService } from './../../services/main-services/main-component.service';
import { Component, OnInit } from '@angular/core';

export interface DsDesctiption {
  topic: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics ?: DsDesctiption[];
  constructor(private mainService: MainComponentService, private http: HttpClient) { }

  ngOnInit() {
    this.mainService.getAllTopics().subscribe(data => console.log(data));
  }

}
