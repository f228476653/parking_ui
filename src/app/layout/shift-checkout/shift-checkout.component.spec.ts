import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCheckoutComponent } from './shift-checkout.component';

describe('ShiftCheckoutComponent', () => {
  let component: ShiftCheckoutComponent;
  let fixture: ComponentFixture<ShiftCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
