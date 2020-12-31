import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShiftCheckoutComponent } from './shift-checkout.component';

const routes: Routes = [
    {
        path: '', component: ShiftCheckoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShiftCheckoutRoutingModule {
}
