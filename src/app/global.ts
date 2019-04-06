import { Injectable } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { User } from 'firebase';
import { UserData } from 'src/models/model';

@Injectable()
export class Globals {

  user: User = undefined;
  userData: UserData = undefined;

  constructor(private authSrvice: AuthService){
    this.authSrvice.user$.subscribe((user: User) => {
      this.user = user;
    });
  }
}
