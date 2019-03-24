import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme = 'default-theme';
  user$: Observable<firebase.User>;

  constructor(
    private router: Router,
    private overlayContainer: OverlayContainer,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
    this.user$ = this.authService.user$;
  }

  onThemeChange(theme: string) {
    this.theme = theme;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
   }
   overlayContainerClasses.add(theme);
  }

  logout() {
    this.authService.logout();
  }

}
