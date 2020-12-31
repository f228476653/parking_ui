import { TestBed, inject } from '@angular/core/testing';

import { ShiftCheckoutService } from './shift-checkout.service';

describe('ShiftCheckoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftCheckoutService]
    });
  });

  it('should be created', inject([ShiftCheckoutService], (service: ShiftCheckoutService) => {
    expect(service).toBeTruthy();
  }));
});
