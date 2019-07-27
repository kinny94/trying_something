import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { UploadFormComponent } from './upload-form.component';
import { MaterialModule } from './../../material.module';
import { UploadService } from './../../services/upload-services/upload.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../../../environments/environment.prod';

const mock_event = {
  target: {
    files: [
      { file:  new File(['foo'], 'foo.txt') }
    ]
  }
};

describe('UploadFormComponent', () => {
  let comp: UploadFormComponent;
  let fixture: ComponentFixture<UploadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        UploadFormComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterModule.forRoot([
          {path: 'upload', component: UploadFormComponent, pathMatch: 'full'}
        ])
      ],
      providers:  [
        {provide: APP_BASE_HREF, useValue : '/' },
        UploadService
      ]
    });

    fixture = TestBed.createComponent(UploadFormComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the upload form component', () => {
    expect(comp).toBeTruthy();
  });

  it('`onTagSelected` method should add tags to the selectedTags behaviorSubject', () => {
    comp.selectedTagsSubject.next(['array']);
    expect(comp.selectedTagsSubject.getValue()).toEqual(['array']);
    comp.onTagSelected('linkedlist');
    expect(comp.selectedTagsSubject.getValue()).toEqual(['array', 'linkedlist']);
  });

  it('`onTagSelected` method should remove tags from the availableTags behaviorSubject', () => {
    const length = comp.availableTagsSubject.getValue().length;
    comp.onTagSelected('Array');
    expect(comp.availableTagsSubject.getValue().length).toEqual(length);
    comp.onTagSelected('LinkedList');
    expect(comp.availableTagsSubject.getValue().length).toEqual(length);
    comp.onTagSelected('Sorting');
    comp.onTagSelected('Searching');
    expect(comp.availableTagsSubject.getValue().length).toEqual(length);
  });

  it('`onSubmit` method should toggle form disabled and enabled feature', () => {
    expect(comp.submitDisabled).toEqual(true);
    comp.upload(mock_event);
    expect(comp.submitDisabled).toEqual(false);
    comp.onSubmit();
    expect(comp.submitDisabled).toEqual(true);
  });
});
