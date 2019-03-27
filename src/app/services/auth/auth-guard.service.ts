import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.authService.user$.pipe(
        map( user => {
          if ( user ) { return true; }
          this.router.navigate(['/']);
          return false;
        })
      );
    }
}
