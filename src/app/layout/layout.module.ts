import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AccountManagementModule } from './account-management/account-management.module';
import { CustomerManagementModule } from './customer-management/customer-management.module';
import { AppMaterialModule } from '../app-material.module';
import { KeyManagementModule } from './key-management/key-management.module';
import { RoleManagementModule } from './role-management/role-management.module';
import { MediaMatcher } from '@angular/cdk/layout';
import { AccountingReportModule } from './accounting-report/accounting-report.module';
import { EntryGateManagementModule } from './entry-gate-management/entry-gate-management.module';
import { DashboardResourceMainModule } from './dashboard-resource-main/dashboard-resource-main.module';
import { GarageGroupManagementModule } from './garage-group-management/garage-group-management.module';
import { GarageManagementModule } from './garage-management/garage-management.module';
import { RevenueAnalysisModule } from './revenue-analysis/revenue-analysis.module';
import { InstantTransactionReportModule } from './instant-transaction-report/instant-transaction-report.module';
import { TransactionMainModule } from './transaction-main/transaction-main.module';
import { InvoiceSettingModule } from './invoice-setting/invoice-setting.module';
import { GarageExitSettingModule } from './garage-exit-setting/garage-exit-setting.module';
import { InstantTransactionReportPadModule } from './instant-transaction-report-pad/instant-transaction-report-pad.module';
import { InstantTransactionReportPmsplusModule } from './instant-transaction-report-pmsplus/instant-transaction-report-pmsplus.module';
import { AlertMessageBoxComponent } from './components/alert-message-box/alert-message-box.component';
import { RegularlyReportModule } from './regularly-report/regularly-report.module';
import { DropdownGarageMenuComponent } from './layout-components/dropdown-garage-menu/dropdown-garage-menu.component';

import { ShiftCheckoutModule } from './shift-checkout/shift-checkout.module';
import { DeviceEventModule } from './device-event/device-event.module';
import { SharedComponentModule } from './components/shared-component.module';
import { InstantTransactionReportIboxModule } from './instant-transaction-report-ibox/instant-transaction-report-ibox.module';
import { ReportQueryComponent } from './regularly-report/report-query/report-query.component';
import { MonthlyRevenueReportComponent } from './regularly-report/monthly-revenue-report/monthly-revenue-report.component';
import { GarageManagementComponent } from './garage-management/garage-management.component';
import { RegularlyReportComponent } from './regularly-report/regularly-report.component';
import { InstantTransactionReportRspmsComponent } from './instant-transaction-report-rspms/instant-transaction-report-rspms.component';
import { FormsModule } from '@angular/forms';
import { PricingRuleManagementModule } from './pricing-rule-management/pricing-rule-management.module';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        AccountManagementModule,
        AccountingReportModule,
        CustomerManagementModule,
        RoleManagementModule,
        KeyManagementModule,
        EntryGateManagementModule,
        DashboardResourceMainModule,
        GarageGroupManagementModule,
        GarageManagementModule,
        RevenueAnalysisModule,
        InstantTransactionReportModule,
        TransactionMainModule,
        InvoiceSettingModule,
        GarageExitSettingModule,
        InstantTransactionReportPadModule,
        InstantTransactionReportPmsplusModule,
        InstantTransactionReportIboxModule,
        NgbDropdownModule.forRoot(),
        AppMaterialModule,
        RegularlyReportModule,
        ShiftCheckoutModule,
        DeviceEventModule,
        SharedComponentModule,
        FormsModule,
        PricingRuleManagementModule
    ],
    declarations: [LayoutComponent, SidebarComponent,
        AlertMessageBoxComponent, DropdownGarageMenuComponent, InstantTransactionReportRspmsComponent],
    exports: [LayoutComponent, GarageManagementComponent],
    providers: [MediaMatcher]
})
export class LayoutModule { }
