import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceGarageDialogComponent } from './dashboard-resource-garage-dialog.component';

describe('DashboardResourceGarageDialogComponent', () => {
  let component: DashboardResourceGarageDialogComponent;
  let fixture: ComponentFixture<DashboardResourceGarageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceGarageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceGarageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
