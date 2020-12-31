import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceSettingComponent } from './invoice-setting.component';

const routes: Routes = [
    {
        path: '', component: InvoiceSettingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvoiceSettingRoutingModule {
}
