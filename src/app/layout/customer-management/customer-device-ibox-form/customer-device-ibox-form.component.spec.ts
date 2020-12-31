import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeviceIboxFormComponent } from './customer-device-ibox-form.component';

describe('CustomerDeviceFormComponent', () => {
  let component: CustomerDeviceIboxFormComponent;
  let fixture: ComponentFixture<CustomerDeviceIboxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDeviceIboxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDeviceIboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
