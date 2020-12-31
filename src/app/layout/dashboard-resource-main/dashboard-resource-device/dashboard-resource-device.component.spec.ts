import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceDeviceComponent } from './dashboard-resource-device.component';

describe('DashboardResourceDeviceComponent', () => {
  let component: DashboardResourceDeviceComponent;
  let fixture: ComponentFixture<DashboardResourceDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
