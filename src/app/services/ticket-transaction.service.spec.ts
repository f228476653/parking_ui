import { TestBed, inject } from '@angular/core/testing';

import { TicketTransactionService } from './ticket-transaction.service';

describe('TicketTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketTransactionService]
    });
  });

  it('should be created', inject([TicketTransactionService], (service: TicketTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
