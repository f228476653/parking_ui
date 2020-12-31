import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIboxFormComponent } from './device-ibox-form.component';

describe('DeviceIboxFormComponent', () => {
  let component: DeviceIboxFormComponent;
  let fixture: ComponentFixture<DeviceIboxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIboxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
