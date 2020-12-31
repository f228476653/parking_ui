import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingRuleManagementComponent } from './pricing-rule-management.component';

describe('PricingRuleManagementComponent', () => {
  let component: PricingRuleManagementComponent;
  let fixture: ComponentFixture<PricingRuleManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingRuleManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingRuleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
