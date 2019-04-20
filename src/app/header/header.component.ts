import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthService } from '../services/auth/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { THEMES } from './../model';
import { UserService } from '../services/user-service/user.service';
import { UserData } from './../../models/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeTheme = 'default-theme';
  availableThemes = THEMES;
  theme: BehaviorSubject<string> = new BehaviorSubject('default-theme');

  user$: Observable<firebase.User>;
  userdata$: Observable<UserData>;

  constructor(
    private overlayContainer: OverlayContainer,
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.activeTheme);
    this.user$ = this.authService.user$;
    if (localStorage.getItem('codebase-theme') !== null) {
      this.activeTheme = localStorage.getItem('codebase-theme');
    }
    this.userdata$ = this.userService.getUserData();
  }

  changeTheme(theme: string) {
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
   }
   this.theme.next(this.availableThemes.get(theme));
    this.activeTheme = this.theme.getValue();
    overlayContainerClasses.add(this.activeTheme);
    localStorage.setItem('codebase-theme', this.activeTheme);
  }

  logout() {
    this.authService.logout();
  }

}
