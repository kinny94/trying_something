import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { UserService } from '../user-service/user.service';
import { UserData } from './../../../models/model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.userService.getUserData().pipe(
      map((userdata: UserData) => {
        if (userdata.isAdmin) {
          return true;
        }
        this.router.navigate(['/']);
        return false;
      }),
    );
  }
}
