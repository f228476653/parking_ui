import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePricingRuleFormComponent } from './complete-pricing-rule-form.component';

describe('CompletePricingRuleFormComponent', () => {
  let component: CompletePricingRuleFormComponent;
  let fixture: ComponentFixture<CompletePricingRuleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePricingRuleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePricingRuleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
