import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionMainComponent } from './transaction-main.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionMainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransactionMainRoutingModule {
}
