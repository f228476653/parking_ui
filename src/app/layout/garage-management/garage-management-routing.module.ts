import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarageManagementComponent } from './garage-management.component';

const routes: Routes = [
    {
        path: '', component: GarageManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GarageManagementRoutingModule {
}
