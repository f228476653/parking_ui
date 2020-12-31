import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstantTransactionReportPmsplusComponent } from './instant-transaction-report-pmsplus.component';

const routes: Routes = [
    {
        path: '', component: InstantTransactionReportPmsplusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstantTransactionReportPmsplusRoutingModule {
}
