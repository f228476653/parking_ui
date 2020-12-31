import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentmethodComponent } from './view-paymentmethod.component';

describe('ViewPaymentmethodComponent', () => {
  let component: ViewPaymentmethodComponent;
  let fixture: ComponentFixture<ViewPaymentmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymentmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
