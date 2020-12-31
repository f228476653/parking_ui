import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceStallDialogComponent } from './dashboard-resource-stall-dialog.component';

describe('DashboardResourceStallDialogComponent', () => {
  let component: DashboardResourceStallDialogComponent;
  let fixture: ComponentFixture<DashboardResourceStallDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceStallDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceStallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
