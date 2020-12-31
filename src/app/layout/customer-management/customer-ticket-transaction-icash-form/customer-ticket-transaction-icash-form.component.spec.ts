import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTicketTransactionICashFormComponent } from './customer-ticket-transaction-icash-form.component';

describe('CustomerTicketTransactionICashFormComponent', () => {
  let component: CustomerTicketTransactionICashFormComponent;
  let fixture: ComponentFixture<CustomerTicketTransactionICashFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTicketTransactionICashFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTicketTransactionICashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
