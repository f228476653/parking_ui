import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantTransactionReportIboxComponent } from './instant-transaction-report-ibox.component';

describe('InstantTransactionReportIboxComponent', () => {
  let component: InstantTransactionReportIboxComponent;
  let fixture: ComponentFixture<InstantTransactionReportIboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantTransactionReportIboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantTransactionReportIboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
