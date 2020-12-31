import { TestBed, inject } from '@angular/core/testing';

import { KeystoreService } from './keystore.service';

describe('KeystoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeystoreService]
    });
  });

  it('should be created', inject([KeystoreService], (service: KeystoreService) => {
    expect(service).toBeTruthy();
  }));
});
