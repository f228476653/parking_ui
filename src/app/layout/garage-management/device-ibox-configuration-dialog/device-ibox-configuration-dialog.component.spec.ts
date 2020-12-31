import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIboxConfigurationDialogComponent } from './device-ibox-configuration-dialog.component';

describe('DeviceIboxConfigurationDialogComponent', () => {
  let component: DeviceIboxConfigurationDialogComponent;
  let fixture: ComponentFixture<DeviceIboxConfigurationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIboxConfigurationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIboxConfigurationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
