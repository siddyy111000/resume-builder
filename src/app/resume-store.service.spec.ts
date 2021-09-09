import { TestBed } from '@angular/core/testing';

import { ResumeStoreService } from './resume-store.service';

describe('ResumeStoreService', () => {
  let service: ResumeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
