import { PricingRuleManagementModule } from './pricing-rule-management.module';

describe('PricingRuleManagementModule', () => {
  let pricingRuleManagementModule: PricingRuleManagementModule;

  beforeEach(() => {
    pricingRuleManagementModule = new PricingRuleManagementModule();
  });

  it('should create an instance', () => {
    expect(pricingRuleManagementModule).toBeTruthy();
  });
});
