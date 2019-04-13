import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { Globals } from 'src/app/global';


@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private globals: Globals
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.user$.pipe(
      map( user => {
        if ( user ) {
          if (this.globals.user) {
            if (this.globals.userData && this.globals.userData.isAdmin) {
              console.log(true);
              this.router.navigate(['/upload']);
              return true;
            }
          }
        }
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
