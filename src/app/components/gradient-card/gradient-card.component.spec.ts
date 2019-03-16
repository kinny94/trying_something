import { GradientCardComponent } from './gradient-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../material.module';
import { RouterModule } from '@angular/router';
import { ProblemsService } from './../../services/problems/problems.service';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

describe('GradientCardComponent', () => {
  let comp: GradientCardComponent;
  let fixture: ComponentFixture<GradientCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GradientCardComponent,
        HomeComponent
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

    fixture = TestBed.createComponent(GradientCardComponent);
    comp = fixture.componentInstance;
  });

  it('should create the gradient-card component', () => {
    expect(comp).toBeTruthy();
  });

  it('should format the url correctly', () => {
    const string = 'Hello Array';
    expect(comp.urlName(string)).toEqual('helloarray');
  });
});
