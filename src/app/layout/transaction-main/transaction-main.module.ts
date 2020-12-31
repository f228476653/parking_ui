import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { TransactionMainRoutingModule } from './transaction-main-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { TransactionMainComponent } from './transaction-main.component';
import { NgxChartsModule } from '@rayyen/its-angular-charts';
import { ViewSitedistributionComponent } from './view-sitedistribution/view-sitedistribution.component';
import { ViewTotalamountComponent } from './view-totalamount/view-totalamount.component';
import { ViewTransactiontypeComponent } from './view-transactiontype/view-transactiontype.component';
import { ViewPaymentmethodComponent } from './view-paymentmethod/view-paymentmethod.component';
import { ViewAmountanalysisComponent } from './view-amountanalysis/view-amountanalysis.component';
import { ViewTimeanalysisComponent } from './view-timeanalysis/view-timeanalysis.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        TransactionMainRoutingModule,
        AppMaterialModule,
        FormsModule,
        NgxChartsModule
    ],
    declarations: [
        TransactionMainComponent,
        ViewSitedistributionComponent,
        ViewTotalamountComponent,
        ViewTransactiontypeComponent,
        ViewPaymentmethodComponent,
        ViewAmountanalysisComponent,
        ViewTimeanalysisComponent,
    ],
    entryComponents: [ViewSitedistributionComponent, ViewTotalamountComponent, ViewTransactiontypeComponent, ViewPaymentmethodComponent,
        ViewAmountanalysisComponent, ViewTimeanalysisComponent],
})
export class TransactionMainModule {}
