import { TestBed, inject } from '@angular/core/testing';

import { ServicebaseService } from './servicebase.service';

describe('ServicebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicebaseService]
    });
  });

  it('should be created', inject([ServicebaseService], (service: ServicebaseService) => {
    expect(service).toBeTruthy();
  }));
});
