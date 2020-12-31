import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantTransactionReportPmsplusComponent } from './instant-transaction-report-pmsplus.component';

describe('InstantTransactionReportPmsplusComponent', () => {
  let component: InstantTransactionReportPmsplusComponent;
  let fixture: ComponentFixture<InstantTransactionReportPmsplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantTransactionReportPmsplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantTransactionReportPmsplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
