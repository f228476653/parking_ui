import { TestBed, inject } from '@angular/core/testing';

import { FeeServiceService } from './fee-service.service';

describe('FeeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeServiceService]
    });
  });

  it('should be created', inject([FeeServiceService], (service: FeeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
