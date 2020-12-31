import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentModule } from '../components/shared-component.module';
import { InstantTransactionReportPmsplusRoutingModule } from './instant-transaction-report-pmsplus-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { InstantTransactionReportPmsplusComponent } from './instant-transaction-report-pmsplus.component';
import { MatProgressSpinnerModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        InstantTransactionReportPmsplusRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule,
        SharedComponentModule,
        MatProgressSpinnerModule
    ],
    declarations: [
      InstantTransactionReportPmsplusComponent,
    ]
})
export class InstantTransactionReportPmsplusModule {}
