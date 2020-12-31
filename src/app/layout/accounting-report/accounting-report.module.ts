import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { AccountingReportRoutingModule } from './accounting-report-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { AccountingReportComponent } from './accounting-report.component';
import { AccountingReportDetailComponent } from './accounting-report-detail/accounting-report-detail.component';
import { AccountingReportDetailDialogComponent } from './accounting-report-detail-dialog/accounting-report-detail-dialog.component';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        AccountingReportRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule,
        NgSelectModule,
        FormsModule
    ],
    declarations: [
        AccountingReportComponent,
        AccountingReportDetailComponent,
        AccountingReportDetailDialogComponent
    ],
    entryComponents: [AccountingReportDetailDialogComponent]
})
export class AccountingReportModule {}
