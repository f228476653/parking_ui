import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketTransactionHappyCashFormComponent } from './customer-ticket-transaction-happycash-form.component';

describe('CustomerTicketTransactionHappyCashFormComponent', () => {
  let component: CustomerTicketTransactionHappyCashFormComponent;
  let fixture: ComponentFixture<CustomerTicketTransactionHappyCashFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTicketTransactionHappyCashFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketTransactionHappyCashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
