import { TestBed, inject } from '@angular/core/testing';

import { GarageExitService } from './garage-exit.service';

describe('GarageExitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarageExitService]
    });
  });

  it('should be created', inject([GarageExitService], (service: GarageExitService) => {
    expect(service).toBeTruthy();
  }));
});
