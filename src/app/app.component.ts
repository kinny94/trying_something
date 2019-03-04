import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codebase';
  data = '';

  constructor(private http: HttpClient, private storage: AngularFireStorage) {
  }

  ngOnInit() {
    const ref = this.storage.ref('array.txt');
    ref.getDownloadURL().subscribe(data =>  console.log(data));
  }
}
