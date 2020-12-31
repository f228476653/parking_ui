import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageTicketTransactionIPassFormComponent } from './garage-ticket-transaction-ipass-form.component';

describe('GarageTicketTransactionIPassFormComponent', () => {
  let component: GarageTicketTransactionIPassFormComponent;
  let fixture: ComponentFixture<GarageTicketTransactionIPassFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageTicketTransactionIPassFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageTicketTransactionIPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
