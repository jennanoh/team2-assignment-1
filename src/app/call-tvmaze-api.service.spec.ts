import { TestBed } from '@angular/core/testing';

import { CallTvmazeApiService } from './call-tvmaze-api.service';

describe('CallTvmazeApiService', () => {
  let service: CallTvmazeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallTvmazeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
