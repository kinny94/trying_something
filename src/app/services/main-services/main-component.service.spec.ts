import { TestBed } from '@angular/core/testing';

import { MainComponentService } from './main-component.service';

describe('MainComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainComponentService = TestBed.get(MainComponentService);
    expect(service).toBeTruthy();
  });
});
