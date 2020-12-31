import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceDeviceDialogComponent } from './dashboard-resource-device-dialog.component';

describe('DashboardResourceDeviceDialogComponent', () => {
  let component: DashboardResourceDeviceDialogComponent;
  let fixture: ComponentFixture<DashboardResourceDeviceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceDeviceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
