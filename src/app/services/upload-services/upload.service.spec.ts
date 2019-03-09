import { TestBed } from '@angular/core/testing';

import { UploadService } from './upload.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment.prod';

describe('UploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          AngularFireStorageModule,
          AngularFireDatabaseModule,
          AngularFireModule.initializeApp(environment.firebase),
        ],
        providers: [UploadService]
    });
}); 

  it('should be created', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service).toBeTruthy();
  });
});
