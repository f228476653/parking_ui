import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { InstantTransactionReportPadRoutingModule } from './instant-transaction-report-pad-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { InstantTransactionReportPadComponent } from './instant-transaction-report-pad.component';
import { Angular5TimePickerModule } from 'angular5-time-picker';
import { SharedComponentModule } from '../components/shared-component.module';
import { MatProgressSpinnerModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        InstantTransactionReportPadRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule,
        Angular5TimePickerModule,
        SharedComponentModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        InstantTransactionReportPadComponent,
    ],
})
export class InstantTransactionReportPadModule {}
