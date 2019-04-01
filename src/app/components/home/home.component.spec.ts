import { HomeComponent } from './home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../material.module';
import { RouterModule } from '@angular/router';
import { ProblemsService } from './../../services/problems/problems.service';
import { APP_BASE_HREF } from '@angular/common';
import { GradientCardComponent } from '../gradient-card/gradient-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CbAnimationDirective } from './../../directives/animation-directive';

describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GradientCardComponent,
        CbAnimationDirective
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: '', component: HomeComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
  });

  it('should create the home component', () => {
    expect(comp).toBeTruthy();
  });
});
