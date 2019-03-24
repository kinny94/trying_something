import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'codebase';
  data = '';

  constructor(
    private auth: AuthService
    ) {
      this.auth.user$.subscribe(user => {
        if (!user) {
          return;
        }
      });
  }

  ngOnInit() {}
}
