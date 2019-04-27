import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MaterialModule } from './../../material.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../environments/environment.prod';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './../../services/user-service/user.service';
import { APP_BASE_HREF } from '@angular/common';
import { TopicProblemsComponent } from '../topic-problems/topic-problems.component';
import { StarComponent } from '../star/star.component';
import { LikeComponent } from '../like/like.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserComponent,
        TopicProblemsComponent,
        StarComponent,
        LikeComponent
      ],
      imports: [
        MaterialModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          { path: 'user/:username', component: UserComponent, pathMatch: 'full'}
        ])
      ],
      providers: [
        UserService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
