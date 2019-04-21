import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { Observable } from 'rxjs';
import { UserData } from 'src/models/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userdata$: Observable<UserData>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userdata$ = this.userService.getUserData();
  }

}
