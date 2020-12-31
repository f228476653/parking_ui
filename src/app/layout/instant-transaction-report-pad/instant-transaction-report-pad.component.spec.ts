import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantTransactionReportPadComponent } from './instant-transaction-report-pad.component';

describe('InstantTransactionReportPadComponent', () => {
  let component: InstantTransactionReportPadComponent;
  let fixture: ComponentFixture<InstantTransactionReportPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantTransactionReportPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantTransactionReportPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
