import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { InstantTransactionReportRoutingModule } from './instant-transaction-report-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { InstantTransactionReportComponent } from './instant-transaction-report.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        InstantTransactionReportRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule
    ],
    declarations: [
        InstantTransactionReportComponent,
    ],
})
export class InstantTransactionReportModule {}
