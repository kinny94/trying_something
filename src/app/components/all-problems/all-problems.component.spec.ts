import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../material.module';
import { RouterModule } from '@angular/router';
import { ProblemsService } from './../../services/problems/problems.service';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllProblemsComponent } from './all-problems.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../environments/environment.prod';
import { StarComponent } from '../star/star.component';
import { LikeComponent } from '../like/like.component';

describe('AllProblemsComponent', () => {
  let comp: AllProblemsComponent;
  let fixture: ComponentFixture<AllProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AllProblemsComponent,
        StarComponent,
        LikeComponent
      ],
      imports: [
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        FormsModule,
        RouterModule.forRoot([
          { path: '', component: AllProblemsComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        ProblemsService,
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(AllProblemsComponent);
    comp = fixture.componentInstance;
  });

  it('should create the all-problems component', () => {
    expect(comp).toBeTruthy();
  });

  it('should change the name of the program', () => {
    const name = 'Hello Program';
    expect(comp.changeName(name)).toEqual('hello-program');
  });
});
