import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePvFormComponent } from './device-pv-form.component';

describe('DevicePvFormComponent', () => {
  let component: DevicePvFormComponent;
  let fixture: ComponentFixture<DevicePvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
