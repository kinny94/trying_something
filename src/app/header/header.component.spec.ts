import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HeaderComponent } from './header.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../environments/environment.prod';

describe('HeaderComponent', () => {
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        AppComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          {path: '', component: AppComponent, pathMatch: 'full'}
        ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
  });

  it('should create the header component', () => {
    expect(comp).toBeTruthy();
  });
});
