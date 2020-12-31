import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketTransactionIPassFormComponent } from './customer-ticket-transaction-ipass-form.component';

describe('CustomerTicketTransactionIPassFormComponent', () => {
  let component: CustomerTicketTransactionIPassFormComponent;
  let fixture: ComponentFixture<CustomerTicketTransactionIPassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTicketTransactionIPassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketTransactionIPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
