import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardResourceMainComponent } from './dashboard-resource-main.component';

const routes: Routes = [
    {
        path: '', component: DashboardResourceMainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardResourceMainRoutingModule {
}
