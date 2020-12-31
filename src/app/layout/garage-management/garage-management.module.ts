import { NgModule } from '@angular/core';
import { CommonModule, formatNumber } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GarageManagementComponent } from './garage-management.component';
import { GarageManagementRoutingModule } from './garage-management-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { GarageFormComponent } from './garage-form/garage-form.component';
import { GarageDialogComponent } from './garage-dialog/garage-dialog.component';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import { DeviceFormComponent } from './device-form/device-form.component';
import { DevicePvFormComponent } from './device-pv-form/device-pv-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Angular5TimePickerModule } from 'angular5-time-picker';
import { DevicePadComponent } from './device-pad/device-pad.component';
import { GarageDeviceFormComponent } from './garage-device-form/garage-device-form.component';
import { DeviceIboxFormComponent } from './device-ibox-form/device-ibox-form.component';
import { DeviceIboxConfigurationDialogComponent } from './device-ibox-configuration-dialog/device-ibox-configuration-dialog.component';
import { CustomerManagementModule } from '../customer-management/customer-management.module';
import { FeeDialogComponent } from './fee-dialog/fee-dialog.component';
import { FeeFormComponent } from './fee-form/fee-form.component';
import { MatStepperModule, MatTooltipModule, MatCardModule } from '@angular/material';
import { GarageTicketTransactionICashFormComponent } from './garage-ticket-transaction-icash-form/garage-ticket-transaction-icash-form.component';
import { GarageTicketTransactionIPassFormComponent } from './garage-ticket-transaction-ipass-form/garage-ticket-transaction-ipass-form.component';
import { GarageTicketTransactionHappyCashFormComponent } from './garage-ticket-transaction-happycash-form/garage-ticket-transaction-happycash-form.component';
import { SharedComponentModule } from '../components/shared-component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        GarageManagementRoutingModule,
        AppMaterialModule,
        HttpClientModule,
        Angular5TimePickerModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatTooltipModule,
        MatCardModule,
        CustomerManagementModule,
        SharedComponentModule
    ],
    declarations: [
        GarageManagementComponent, GarageDialogComponent, GarageFormComponent,
        GarageDialogComponent, DeviceDialogComponent, DeviceFormComponent, DevicePvFormComponent,
        DevicePadComponent, GarageDeviceFormComponent,
        DeviceIboxFormComponent,
        DeviceIboxConfigurationDialogComponent,
        FeeDialogComponent,
        FeeFormComponent,
        GarageTicketTransactionICashFormComponent,
        GarageTicketTransactionIPassFormComponent,
        GarageTicketTransactionHappyCashFormComponent
    ],
    exports: [FeeFormComponent, FeeDialogComponent, GarageManagementComponent ],
    entryComponents: [GarageDialogComponent, DeviceDialogComponent,
        DeviceIboxConfigurationDialogComponent, FeeDialogComponent
    ]
})
export class GarageManagementModule {}
