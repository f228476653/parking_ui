import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingReportDetailComponent } from './accounting-report-detail.component';

describe('AccountingReportDetailComponent', () => {
  let component: AccountingReportDetailComponent;
  let fixture: ComponentFixture<AccountingReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
