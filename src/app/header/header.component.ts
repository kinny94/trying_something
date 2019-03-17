import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme = 'light-theme';

  constructor(
    private router: Router,
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit() {
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  onThemeChange(theme: string){
    this.theme = theme;
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
   }
   overlayContainerClasses.add(theme);
  }

}
