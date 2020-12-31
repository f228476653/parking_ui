import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceDrivewayDetailDialogComponent } from './dashboard-resource-driveway-detail-dialog.component';

describe('DashboardResourceDrivewayDetailDialogComponent', () => {
  let component: DashboardResourceDrivewayDetailDialogComponent;
  let fixture: ComponentFixture<DashboardResourceDrivewayDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceDrivewayDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceDrivewayDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
