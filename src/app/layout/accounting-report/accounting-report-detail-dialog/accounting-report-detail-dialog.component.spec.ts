import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingReportDetailDialogComponent } from './accounting-report-detail-dialog.component';

describe('AccountingReportDetailDialogComponent', () => {
  let component: AccountingReportDetailDialogComponent;
  let fixture: ComponentFixture<AccountingReportDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingReportDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingReportDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
