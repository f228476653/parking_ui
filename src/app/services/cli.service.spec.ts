import { TestBed, inject } from '@angular/core/testing';

import { CliService } from './cli.service';

describe('CliService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CliService]
    });
  });

  it('should be created', inject([CliService], (service: CliService) => {
    expect(service).toBeTruthy();
  }));
});
