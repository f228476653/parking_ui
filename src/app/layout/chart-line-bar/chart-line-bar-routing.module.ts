import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartLineBarComponent } from './chart-line-bar.component';

const routes: Routes = [
    {
        path: '', component: ChartLineBarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartLineBarRoutingModule {
}
