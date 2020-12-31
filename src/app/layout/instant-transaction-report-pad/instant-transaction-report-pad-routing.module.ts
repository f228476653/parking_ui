import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstantTransactionReportPadComponent } from './instant-transaction-report-pad.component';

const routes: Routes = [
    {
        path: '', component: InstantTransactionReportPadComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstantTransactionReportPadRoutingModule {
}
