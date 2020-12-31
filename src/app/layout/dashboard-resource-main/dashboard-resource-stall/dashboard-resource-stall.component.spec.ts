import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceStallComponent } from './dashboard-resource-stall.component';

describe('DashboardResourceStallComponent', () => {
  let component: DashboardResourceStallComponent;
  let fixture: ComponentFixture<DashboardResourceStallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceStallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceStallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
