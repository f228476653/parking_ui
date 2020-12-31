import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../app-material.module';
import { DashboardResourceMainRoutingModule } from './dashboard-resource-main-routing.module';
import { DashboardResourceMainComponent } from './dashboard-resource-main.component';
import { NgxChartsModule } from '@rayyen/its-angular-charts';
import { DashboardResourceGarageComponent } from './dashboard-resource-garage/dashboard-resource-garage.component';
import { DashboardResourceGarageDialogComponent } from './dashboard-resource-garage-dialog/dashboard-resource-garage-dialog.component';
import { DashboardResourceDrivewayComponent } from './dashboard-resource-driveway/dashboard-resource-driveway.component';
import { DashboardResourceDrivewayDialogComponent } from './dashboard-resource-driveway-dialog/dashboard-resource-driveway-dialog.component';
import { DashboardResourceDeviceDialogComponent } from './dashboard-resource-device-dialog/dashboard-resource-device-dialog.component';
import { DashboardResourceDeviceComponent } from './dashboard-resource-device/dashboard-resource-device.component';
import { DashboardResourceDrivewayDetailComponent } from './dashboard-resource-driveway-detail/dashboard-resource-driveway-detail.component';
import { DashboardResourceDrivewayDetailDialogComponent } from './dashboard-resource-driveway-detail-dialog/dashboard-resource-driveway-detail-dialog.component';
import { DashboardResourceStallComponent } from './dashboard-resource-stall/dashboard-resource-stall.component';
import { DashboardResourceStallDialogComponent } from './dashboard-resource-stall-dialog/dashboard-resource-stall-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardResourceMainRoutingModule,
        NgxChartsModule,
        AppMaterialModule
    ],
    declarations: [
        DashboardResourceMainComponent,
        DashboardResourceGarageComponent,
        DashboardResourceGarageDialogComponent,
        DashboardResourceDrivewayComponent,
        DashboardResourceDrivewayDialogComponent,
        DashboardResourceDeviceDialogComponent,
        DashboardResourceDeviceComponent,
        DashboardResourceDrivewayDetailComponent,
        DashboardResourceDrivewayDetailDialogComponent,
        DashboardResourceStallComponent,
        DashboardResourceStallDialogComponent
    ],
    entryComponents: [DashboardResourceGarageDialogComponent, DashboardResourceDrivewayDialogComponent
        , DashboardResourceDeviceDialogComponent, DashboardResourceDrivewayDetailDialogComponent, DashboardResourceStallDialogComponent]
})
export class DashboardResourceMainModule {}
