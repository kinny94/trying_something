import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from './material.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { GradientCardComponent } from './components/gradient-card/gradient-card.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment.prod';

describe('AppComponent', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        GradientCardComponent
      ],
      imports: [
        MaterialModule,
        AngularFireModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        BrowserAnimationsModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          { path: '', component: AppComponent, pathMatch: 'full'}
        ])
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app component', () => {
    expect(comp).toBeTruthy();
  });

  it('should set the title as codebase', () => {
    expect(comp.title).toEqual('codebase');
  });
});
