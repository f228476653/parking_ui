import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportQueryComponent } from './report-query/report-query.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';

import { Angular5TimePickerModule } from 'angular5-time-picker';
import { RegularlyReportComponent } from './regularly-report.component';
import { DayRevenueFormComponent } from './day-revenue-form/day-revenue-form.component';
import { MonthlyRevenueReportComponent } from './monthly-revenue-report/monthly-revenue-report.component';
import { MonthlyUsageFormComponent } from './monthly-usage-form/monthly-usage-form.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        AppMaterialModule,
        FormsModule,
        KeyManagementModule,
        MatProgressBarModule,
        Angular5TimePickerModule
    ],
    declarations: [
      ReportQueryComponent, RegularlyReportComponent, DayRevenueFormComponent, MonthlyRevenueReportComponent, MonthlyUsageFormComponent
    ],
})
export class RegularlyReportModule { }
