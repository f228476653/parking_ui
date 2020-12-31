import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyUsageFormComponent } from './monthly-usage-form.component';

describe('MonthlyUsageFormComponent', () => {
  let component: MonthlyUsageFormComponent;
  let fixture: ComponentFixture<MonthlyUsageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyUsageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyUsageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
