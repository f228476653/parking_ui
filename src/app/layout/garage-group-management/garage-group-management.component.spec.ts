import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageGroupManagementComponent } from './garage-group-management.component';

describe('GarageGroupManagementComponent', () => {
  let component: GarageGroupManagementComponent;
  let fixture: ComponentFixture<GarageGroupManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageGroupManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageGroupManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
