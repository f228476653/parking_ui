import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalPricingRuleComponent } from './normal-pricing-rule.component';

describe('NormalPricingRuleComponent', () => {
  let component: NormalPricingRuleComponent;
  let fixture: ComponentFixture<NormalPricingRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalPricingRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalPricingRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
