import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyRevenueReportComponent } from './monthly-revenue-report.component';

describe('MonthlyRevenueReportComponent', () => {
  let component: MonthlyRevenueReportComponent;
  let fixture: ComponentFixture<MonthlyRevenueReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyRevenueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyRevenueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
