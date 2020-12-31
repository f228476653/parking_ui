import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarageGroupManagementComponent } from './garage-group-management.component';

const routes: Routes = [
    {
        path: '', component: GarageGroupManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GarageGroupManagementRoutingModule {
}
