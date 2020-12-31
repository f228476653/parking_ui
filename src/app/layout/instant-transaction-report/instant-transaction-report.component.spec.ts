import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantTransactionReportComponent } from './instant-transaction-report.component';

describe('InstantTranscationReportComponent', () => {
  let component: InstantTransactionReportComponent;
  let fixture: ComponentFixture<InstantTransactionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantTransactionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantTransactionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
