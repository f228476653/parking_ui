import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarageExitSettingComponent } from './garage-exit-setting.component';

const routes: Routes = [
    {
        path: '', component: GarageExitSettingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GarageExitSettingRoutingModule {
}
