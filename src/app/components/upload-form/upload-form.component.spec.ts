import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFormComponent } from './upload-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('UploadFormComponent', () => {
  let component: UploadFormComponent;
  let fixture: ComponentFixture<UploadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadFormComponent,
      ],
      imports: [
          MaterialModule,
          HttpClientModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          FormsModule,
          RouterModule.forRoot([
              { path: 'upload', component: UploadFormComponent, pathMatch: 'full' },
            ])
      ],
  }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search component', () => {
    const fixture = TestBed.createComponent(UploadFormComponent);
    const allProblemsComponent = fixture.debugElement.componentInstance;
    expect(allProblemsComponent).toBeTruthy();
  });
});
