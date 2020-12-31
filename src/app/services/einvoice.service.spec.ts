import { TestBed, inject } from '@angular/core/testing';

import { EinvoiceService } from './einvoice.service';

describe('EinvoiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EinvoiceService]
    });
  });

  it('should be created', inject([EinvoiceService], (service: EinvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
