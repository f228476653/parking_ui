import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceDrivewayDialogComponent } from './dashboard-resource-driveway-dialog.component';

describe('DashboardResourceDrivewayDialogComponent', () => {
  let component: DashboardResourceDrivewayDialogComponent;
  let fixture: ComponentFixture<DashboardResourceDrivewayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceDrivewayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceDrivewayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
