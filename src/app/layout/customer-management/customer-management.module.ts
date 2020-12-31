import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerManagementComponent } from './customer-management.component';
import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { CustomerEditDialogComponent } from './customer-edit-dialog/customer-edit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { CustomerStepperDialogComponent } from './customer-stepper-dialog/customer-stepper-dialog.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CustomerDeviceIboxFormComponent } from './customer-device-ibox-form/customer-device-ibox-form.component';
import { CustomerDeviceDialogComponent } from './customer-device-dialog/customer-device-dialog.component';
import { CustomerDevicePv3FormComponent } from './customer-device-pv3-form/customer-device-pv3-form.component';
// tslint:disable-next-line:max-line-length
import { CustomerTicketTransactionICashFormComponent } from './customer-ticket-transaction-icash-form/customer-ticket-transaction-icash-form.component';
// tslint:disable-next-line:max-line-length
import { CustomerTicketTransactionIPassFormComponent } from './customer-ticket-transaction-ipass-form/customer-ticket-transaction-ipass-form.component';
// tslint:disable-next-line:max-line-length
import { CustomerTicketTransactionHappyCashFormComponent } from './customer-ticket-transaction-happycash-form/customer-ticket-transaction-happycash-form.component';
import { EinvoiceConfigComponent } from './einvoice-config/einvoice-config.component';
import { SharedComponentModule } from '../components/shared-component.module';
import { RoleManagementModule } from '../role-management/role-management.module';
import { AccountManagementModule } from '../account-management/account-management.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CustomerManagementRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule,
        MatStepperModule,
        ReactiveFormsModule,
        SharedComponentModule,
        RoleManagementModule,
        AccountManagementModule

        // FileUploaderModule
    ],
    declarations: [
        CustomerManagementComponent, CustomerEditDialogComponent,
        CustomerStepperDialogComponent,
        CustomerDeviceIboxFormComponent, CustomerDeviceDialogComponent, CustomerDevicePv3FormComponent, EinvoiceConfigComponent,
        CustomerTicketTransactionICashFormComponent,
        CustomerTicketTransactionIPassFormComponent,
        CustomerTicketTransactionHappyCashFormComponent
    ],
    exports: [CustomerDeviceIboxFormComponent],
    entryComponents: [CustomerEditDialogComponent, CustomerStepperDialogComponent,
        CustomerDeviceDialogComponent]
})
export class CustomerManagementModule {
}
