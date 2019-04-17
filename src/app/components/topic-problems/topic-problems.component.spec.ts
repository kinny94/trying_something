import { AngularFireDatabaseModule } from '@angular/fire/database';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './../../material.module';
import { StarComponent } from './../star/star.component';
import { TopicProblemsComponent } from './topic-problems.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProblemComponent } from '../problem/problem.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LikeComponent } from '../like/like.component';

describe('TopicProblemsComponent', () => {
  let comp: TopicProblemsComponent;
  let fixture: ComponentFixture<TopicProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopicProblemsComponent,
        StarComponent,
        ProblemComponent,
        LikeComponent
      ],
      imports: [
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        MaterialModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          { path: ':id/:topic/:problem,', component: ProblemComponent, pathMatch: 'full' },
        ])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
      ]
    });

    fixture = TestBed.createComponent(TopicProblemsComponent);
    comp = fixture.componentInstance;
  });

  it('should create the `TopicProblemsComponent component', () => {
    expect(comp).toBeTruthy();
  });

});
