import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceGarageComponent } from './dashboard-resource-garage.component';

describe('DashboardResourceGarageComponent', () => {
  let component: DashboardResourceGarageComponent;
  let fixture: ComponentFixture<DashboardResourceGarageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceGarageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
