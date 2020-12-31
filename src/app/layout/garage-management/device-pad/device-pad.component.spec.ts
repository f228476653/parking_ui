import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePadComponent } from './device-pad.component';

describe('DevicePadComponent', () => {
  let component: DevicePadComponent;
  let fixture: ComponentFixture<DevicePadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
