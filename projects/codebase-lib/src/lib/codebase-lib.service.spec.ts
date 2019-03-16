import { TestBed } from '@angular/core/testing';

import { CodebaseLibService } from './codebase-lib.service';

describe('CodebaseLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodebaseLibService = TestBed.get(CodebaseLibService);
    expect(service).toBeTruthy();
  });
});
