import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRevenueFormComponent } from './day-revenue-form.component';

describe('DayRevenueFormComponent', () => {
  let component: DayRevenueFormComponent;
  let fixture: ComponentFixture<DayRevenueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayRevenueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayRevenueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
