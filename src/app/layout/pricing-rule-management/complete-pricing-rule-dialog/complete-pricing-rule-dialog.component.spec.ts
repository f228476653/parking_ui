import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePricingRuleDialogComponent } from './complete-pricing-rule-dialog.component';

describe('CompletePricingRuleDialogComponent', () => {
  let component: CompletePricingRuleDialogComponent;
  let fixture: ComponentFixture<CompletePricingRuleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletePricingRuleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePricingRuleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
