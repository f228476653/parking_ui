import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantTransactionReportRspmsComponent } from './instant-transaction-report-rspms.component';

describe('InstantTransactionReportRspmsComponent', () => {
  let component: InstantTransactionReportRspmsComponent;
  let fixture: ComponentFixture<InstantTransactionReportRspmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantTransactionReportRspmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantTransactionReportRspmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
