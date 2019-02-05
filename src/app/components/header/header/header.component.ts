import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, query, style, group, animate } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
    , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  themeClass = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(( val ) => {
      if ( val && val['url'] !== undefined ) {
        const route = val['url'].split('/')[1];
        if ( route === 'stack-overflow' || route === '' ) {
          this.themeClass = 'stack-overflow';
        } else if ( route === 'github' ) {
          this.themeClass = 'github';
        } else if ( route === 'youtube' ) {
          this.themeClass = 'youtube';
        } else if ( route === 'weather' ) {
          this.themeClass = 'weather';
        } else if ( route === 'flight' ) {
          this.themeClass = 'flight';
        }
      }
    });
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
