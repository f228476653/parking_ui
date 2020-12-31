import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularlyReportComponent } from './regularly-report.component';

describe('RegularlyReportComponent', () => {
  let component: RegularlyReportComponent;
  let fixture: ComponentFixture<RegularlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
