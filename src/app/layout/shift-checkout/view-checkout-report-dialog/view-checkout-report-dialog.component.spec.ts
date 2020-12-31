import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCheckoutReportDialogComponent } from './view-checkout-report-dialog.component';

describe('ViewCheckoutReportDialogComponent', () => {
  let component: ViewCheckoutReportDialogComponent;
  let fixture: ComponentFixture<ViewCheckoutReportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCheckoutReportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCheckoutReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
