import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStepperDialogComponent } from './customer-stepper-dialog.component';

describe('CustomerStepperDialogComponent', () => {
  let component: CustomerStepperDialogComponent;
  let fixture: ComponentFixture<CustomerStepperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStepperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStepperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
