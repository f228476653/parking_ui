import { TestBed, inject } from '@angular/core/testing';

import { RegularlyReportsService } from './regularly-reports.service';

describe('RegularlyReportsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegularlyReportsService]
    });
  });

  it('should be created', inject([RegularlyReportsService], (service: RegularlyReportsService) => {
    expect(service).toBeTruthy();
  }));
});
