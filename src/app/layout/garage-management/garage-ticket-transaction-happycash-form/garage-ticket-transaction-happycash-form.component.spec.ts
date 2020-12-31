import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageTicketTransactionHappyCashFormComponent } from './garage-ticket-transaction-happycash-form.component';

describe('GarageTicketTransactionHappyCashFormComponent', () => {
  let component: GarageTicketTransactionHappyCashFormComponent;
  let fixture: ComponentFixture<GarageTicketTransactionHappyCashFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageTicketTransactionHappyCashFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageTicketTransactionHappyCashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
