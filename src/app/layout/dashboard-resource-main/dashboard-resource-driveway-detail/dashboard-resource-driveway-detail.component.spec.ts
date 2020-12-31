import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceDrivewayDetailComponent } from './dashboard-resource-driveway-detail.component';

describe('DashboardResourceDrivewayDetailComponent', () => {
  let component: DashboardResourceDrivewayDetailComponent;
  let fixture: ComponentFixture<DashboardResourceDrivewayDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceDrivewayDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceDrivewayDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
