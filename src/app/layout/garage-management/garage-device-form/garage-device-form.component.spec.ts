import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageDeviceFormComponent } from './garage-device-form.component';

describe('GarageDeviceFormComponent', () => {
  let component: GarageDeviceFormComponent;
  let fixture: ComponentFixture<GarageDeviceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageDeviceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageDeviceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
