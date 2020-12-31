import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeviceDialogComponent } from './customer-device-dialog.component';

describe('CustomerDeviceDialogComponent', () => {
  let component: CustomerDeviceDialogComponent;
  let fixture: ComponentFixture<CustomerDeviceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDeviceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeviceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
