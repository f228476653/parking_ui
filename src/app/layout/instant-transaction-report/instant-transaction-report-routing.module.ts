import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstantTransactionReportComponent } from './instant-transaction-report.component';

const routes: Routes = [
    {
        path: '', component: InstantTransactionReportComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstantTransactionReportRoutingModule {
}
