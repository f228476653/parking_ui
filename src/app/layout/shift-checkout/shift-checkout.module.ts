import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { ShiftCheckoutRoutingModule } from './shift-checkout-routing.module';
import { ShiftCheckoutComponent } from './shift-checkout.component';
import { ViewCheckoutReportDialogComponent } from './view-checkout-report-dialog/view-checkout-report-dialog.component';



@NgModule({
  imports: [
      CommonModule,
      NgbCarouselModule.forRoot(),
      NgbAlertModule.forRoot(),
      ShiftCheckoutRoutingModule,
      AppMaterialModule,
      FormsModule
  ],
  declarations: [
    ShiftCheckoutComponent, ViewCheckoutReportDialogComponent
  ],
  entryComponents: [ViewCheckoutReportDialogComponent]
})
export class ShiftCheckoutModule {}
