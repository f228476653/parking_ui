import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { InstantTransactionReportComponent } from './instant-transaction-report/instant-transaction-report.component';
import { TransactionMainComponent } from './transaction-main/transaction-main.component';
import { InvoiceSettingComponent } from './invoice-setting/invoice-setting.component';
import { GarageExitSettingComponent } from './garage-exit-setting/garage-exit-setting.component';
import { InstantTransactionReportPadComponent } from './instant-transaction-report-pad/instant-transaction-report-pad.component';
// tslint:disable-next-line:max-line-length
import { InstantTransactionReportPmsplusComponent } from './instant-transaction-report-pmsplus/instant-transaction-report-pmsplus.component';
import { RegularlyReportComponent } from './regularly-report/regularly-report.component';
import { DayRevenueFormComponent } from './regularly-report/day-revenue-form/day-revenue-form.component';
import { MonthlyRevenueReportComponent } from './regularly-report/monthly-revenue-report/monthly-revenue-report.component';
import { ShiftCheckoutComponent } from './shift-checkout/shift-checkout.component';
import { MonthlyUsageFormComponent } from './regularly-report/monthly-usage-form/monthly-usage-form.component';
import { DeviceEventComponent } from './device-event/device-event.component';
import { InstantTransactionReportIboxComponent } from './instant-transaction-report-ibox/instant-transaction-report-ibox.component';
import { InstantTransactionReportRspmsComponent } from './instant-transaction-report-rspms/instant-transaction-report-rspms.component';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'account'},
            { path: 'account', loadChildren: './account-management/account-management.module#AccountManagementModule'},
            { path: 'customer', loadChildren: './customer-management/customer-management.module#CustomerManagementModule' },
            { path: 'key', loadChildren: './key-management/key-management.module#KeyManagementModule' },
            { path: 'role', loadChildren: './role-management/role-management.module#RoleManagementModule' },
            { path: 'accounting-report', loadChildren: './accounting-report/accounting-report.module#AccountingReportModule' },
            { path: 'driveway', loadChildren: './entry-gate-management/entry-gate-management.module#EntryGateManagementModule' },
            { path: 'dashboard-resource-main', loadChildren:
            './dashboard-resource-main/dashboard-resource-main.module#DashboardResourceMainModule' },
            { path: 'garage-group', loadChildren:
            './garage-group-management/garage-group-management.module#GarageGroupManagementModule' },
            { path: 'garage', loadChildren:
            './garage-management/garage-management.module#GarageManagementModule' },
            { path: 'revenue-analysis', loadChildren:
            './revenue-analysis/revenue-analysis.module#RevenueAnalysisModule' },
            { path: 'pricing_rule', loadChildren:
            './pricing-rule-management/pricing-rule-management.module#PricingRuleManagementModule' },
            { path: 'instant-transaction-report', component: InstantTransactionReportComponent},
            { path: 'transaction-main', component: TransactionMainComponent},
            { path: 'invoice-setting', component: InvoiceSettingComponent },
            { path: 'garage-exit-setting', component: GarageExitSettingComponent },
            { path: 'instant-transaction-report-pad', component: InstantTransactionReportPadComponent },
            { path: 'instant-transaction-report-pmsplus', component: InstantTransactionReportPmsplusComponent },
            { path: 'instant-transaction-report-ibox', component: InstantTransactionReportIboxComponent },
            { path: 'regularly-report', component: RegularlyReportComponent },
            { path: 'shift-checkout', component: ShiftCheckoutComponent },
            { path: 'daily-revenue-report', component: DayRevenueFormComponent },
            { path: 'monthly-revenue-report', component: MonthlyRevenueReportComponent },
            { path: 'monthly-usage-report', component: MonthlyUsageFormComponent },
            { path: 'device-event', component: DeviceEventComponent },
            { path: 'instant-transaction-report-rspms', component: InstantTransactionReportRspmsComponent},
          ]
    }
];
// const routes: Routes = [
//     {
//         path: '',
//         component: LayoutComponent,
//         children: [
//             { path: '', redirectTo: 'dashboard' },
//             { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
//             { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
//         ]
//     }
// ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
