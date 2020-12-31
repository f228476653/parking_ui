import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceEventComponent } from './device-event.component';

const routes: Routes = [
    {
        path: '', component: DeviceEventComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceEventRoutingModule {
}
