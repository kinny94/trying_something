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
    // const ref = this.storage.ref('array/HelloArray.java');
    // ref.getDownloadURL().subscribe(data => {
    //     this.http.get(data, { responseType: 'text' as 'json' }).subscribe(text => console.log(text));
    //   }
    // );
  }
}
