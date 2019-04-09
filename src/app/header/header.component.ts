import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthService } from '../services/auth/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { THEMES } from './../model';

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

  constructor(
    private overlayContainer: OverlayContainer,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.activeTheme);
    this.user$ = this.authService.user$;
    if (localStorage.getItem('codebase-theme') !== null) {
      this.activeTheme = localStorage.getItem('codebase-theme');
    }
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
