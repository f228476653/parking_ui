import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { PricingRuleManagementRoutingModule } from './pricing-rule-management-routing.module';
import { PricingRuleManagementComponent } from './pricing-rule-management.component';
import { NormalPricingRuleComponent } from './normal-pricing-rule/normal-pricing-rule.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from '../../app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from '../components/shared-component.module';
import { CompletePricingRuleDialogComponent } from './complete-pricing-rule-dialog/complete-pricing-rule-dialog.component';
import { CompletePricingRuleFormComponent } from './complete-pricing-rule-form/complete-pricing-rule-form.component';
import { GarageManagementModule } from '../garage-management/garage-management.module';
import { FeeDialogComponent } from '../garage-management/fee-dialog/fee-dialog.component';
import { FeeFormComponent } from '../garage-management/fee-form/fee-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    AppMaterialModule,
    HttpClientModule,
    // GarageManagementModule,
    // PricingRuleManagementRoutingModule,
    SharedComponentModule
  ],
  declarations: [PricingRuleManagementComponent, NormalPricingRuleComponent,
    CompletePricingRuleDialogComponent, CompletePricingRuleFormComponent],
  entryComponents: [CompletePricingRuleDialogComponent
  ]
})
export class PricingRuleManagementModule { }
