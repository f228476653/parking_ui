import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentModule } from '../components/shared-component.module';
import { InstantTransactionReportIboxRoutingModule } from './instant-transaction-report-ibox-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { InstantTransactionReportIboxComponent } from './instant-transaction-report-ibox.component';
import { MatProgressSpinnerModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        InstantTransactionReportIboxRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule,
        SharedComponentModule,
        MatProgressSpinnerModule
    ],
    declarations: [
      InstantTransactionReportIboxComponent,
    ]
})
export class InstantTransactionReportIboxModule {}
