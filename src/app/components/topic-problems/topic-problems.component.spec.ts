import { AngularFireDatabaseModule } from '@angular/fire/database';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from './../../material.module';
import { StarComponent } from './../star/star.component';
import { TopicProblemsComponent } from './topic-problems.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProblemComponent } from '../problem/problem.component';

describe('TopicProblemsComponent', () => {
  let comp: TopicProblemsComponent;
  let fixture: ComponentFixture<TopicProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopicProblemsComponent,
        StarComponent,
        ProblemComponent
      ],
      imports: [
        AngularFireDatabaseModule,
        MaterialModule,
        FlexLayoutModule,
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
