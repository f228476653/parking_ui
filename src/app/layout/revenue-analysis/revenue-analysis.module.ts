import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { RevenueAnalysisRoutingModule } from './revenue-analysis-routing.module';
import { RevenueAnalysisComponent } from './revenue-analysis.component';
import { NgxChartsModule } from '@rayyen/its-angular-charts';
import { ViewTimeanalysisComponent } from './view-timeanalysis/view-timeanalysis.component';
import { ViewSitedistributionComponent } from './view-sitedistribution/view-sitedistribution.component';
import { ViewTotalamountComponent } from './view-totalamount/view-totalamount.component';
import { ViewRevenuetrendsComponent } from './view-revenuetrends/view-revenuetrends.component';
import { ViewTransactiontypeComponent } from './view-transactiontype/view-transactiontype.component';
import { ViewPaymentmethodComponent } from './view-paymentmethod/view-paymentmethod.component';
import { ViewAmountanalysisComponent } from './view-amountanalysis/view-amountanalysis.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RevenueAnalysisRoutingModule,
    NgxChartsModule,
    AppMaterialModule
  ],
  declarations: [RevenueAnalysisComponent, ViewTimeanalysisComponent, ViewSitedistributionComponent, ViewTotalamountComponent, ViewRevenuetrendsComponent, ViewTransactiontypeComponent, ViewPaymentmethodComponent, ViewAmountanalysisComponent],
  entryComponents: [ViewTimeanalysisComponent, ViewSitedistributionComponent, ViewTotalamountComponent, ViewRevenuetrendsComponent, ViewTransactiontypeComponent, ViewPaymentmethodComponent,ViewAmountanalysisComponent]
})
export class RevenueAnalysisModule { }
