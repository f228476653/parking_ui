import { TestBed, inject } from '@angular/core/testing';

import { PmsplusService } from './pmsplus.service';

describe('PmsplusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmsplusService]
    });
  });

  it('should be created', inject([PmsplusService], (service: PmsplusService) => {
    expect(service).toBeTruthy();
  }));
});
