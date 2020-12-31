import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceDrivewayComponent } from './dashboard-resource-driveway.component';

describe('DashboardResourceDrivewayComponent', () => {
  let component: DashboardResourceDrivewayComponent;
  let fixture: ComponentFixture<DashboardResourceDrivewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceDrivewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceDrivewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
