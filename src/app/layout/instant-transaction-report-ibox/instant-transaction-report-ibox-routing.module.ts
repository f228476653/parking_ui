import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstantTransactionReportIboxComponent } from './instant-transaction-report-ibox.component';

const routes: Routes = [
    {
        path: '', component: InstantTransactionReportIboxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstantTransactionReportIboxRoutingModule {
}
