import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyManagementComponent } from './key-management.component';

const routes: Routes = [
    {
        path: '', component: KeyManagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KeyManagementRoutingModule {
}
