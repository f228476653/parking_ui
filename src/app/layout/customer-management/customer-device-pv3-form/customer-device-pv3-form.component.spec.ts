import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDevicePv3FormComponent } from './customer-device-pv3-form.component';

describe('CustomerDevicePv3FormComponent', () => {
  let component: CustomerDevicePv3FormComponent;
  let fixture: ComponentFixture<CustomerDevicePv3FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDevicePv3FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDevicePv3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
