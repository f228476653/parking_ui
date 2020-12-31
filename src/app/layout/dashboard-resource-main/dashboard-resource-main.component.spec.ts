import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourceMainComponent } from './dashboard-resource-main.component';

describe('DashboardResourceMainComponent', () => {
  let component: DashboardResourceMainComponent;
  let fixture: ComponentFixture<DashboardResourceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
