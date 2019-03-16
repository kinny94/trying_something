import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

import { ProblemComponent } from './problem.component';
import { ProblemsService } from './../../services/problems/problems.service';
import { environment } from './../../../environments/environment.prod';
import { MaterialModule } from './../../material.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

describe('ProblemComponent', () => {
  let comp: ProblemComponent;
  let fixture: ComponentFixture<ProblemComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProblemComponent
      ],
      imports: [
        MaterialModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          {path: ':id/:topic/:problem', component:ProblemComponent, pathMatch: 'full'}
        ])
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        ProblemsService
      ]
    });

    fixture = TestBed.createComponent(ProblemComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the Problem component', () => {
    expect(comp).toBeTruthy();
  });
});
