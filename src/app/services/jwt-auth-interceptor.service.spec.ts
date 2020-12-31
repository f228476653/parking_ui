import { TestBed, inject } from '@angular/core/testing';

import { JwtAuthInterceptorService } from './jwt-auth-interceptor.service';

describe('JwtAuthInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtAuthInterceptorService]
    });
  });

  it('should be created', inject([JwtAuthInterceptorService], (service: JwtAuthInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
