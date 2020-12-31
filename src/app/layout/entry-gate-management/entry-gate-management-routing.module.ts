import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryGateManagementComponent } from './entry-gate-management.component';

const routes: Routes = [
    {
        path: '', component: EntryGateManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntryGateManagementRoutingModule {
}
