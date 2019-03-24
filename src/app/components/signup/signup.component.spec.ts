import { SignupComponent } from './signup.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './../../material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { UserService } from './../../services/user-service/user.service';
import { environment } from './../../../../src/environments/environment.prod';
import { AngularFireAuthModule } from '@angular/fire/auth';

describe('SignUpcomponent', () => {

  let comp: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent
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
          { path: 'signup', component: SignupComponent, pathMatch: 'full'}
        ])
      ],
      providers: [
        UserService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    });

    fixture = TestBed.createComponent(SignupComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the signup component', () => {
    expect(comp).toBeTruthy();
  });
});
