import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageTicketTransactionICashFormComponent } from './garage-ticket-transaction-icash-form.component';

describe('GarageTicketTransactionICashFormComponent', () => {
  let component: GarageTicketTransactionICashFormComponent;
  let fixture: ComponentFixture<GarageTicketTransactionICashFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageTicketTransactionICashFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageTicketTransactionICashFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
