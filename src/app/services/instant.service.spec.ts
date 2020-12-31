import { TestBed, inject } from '@angular/core/testing';

import { InstantService } from './instant.service';

describe('InstantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstantService]
    });
  });

  it('should be created', inject([InstantService], (service: InstantService) => {
    expect(service).toBeTruthy();
  }));
});
