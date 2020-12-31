import { TestBed, inject } from '@angular/core/testing';

import { EntryGateService } from './entry-gate.service';

describe('EntryGateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryGateService]
    });
  });

  it('should be created', inject([EntryGateService], (service: EntryGateService) => {
    expect(service).toBeTruthy();
  }));
});
