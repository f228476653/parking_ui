import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AccountManagementComponent } from './account-management.component';
import { AccountManagementRoutingModule } from './account-management-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { AccountEditDialogComponent } from './account-edit-dialog/account-edit-dialog.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { SharedComponentModule } from '../components/shared-component.module';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        AccountManagementRoutingModule,
        AppMaterialModule,
        FormsModule,
        SharedComponentModule
    ],
    declarations: [
        AccountManagementComponent, AccountEditDialogComponent, AccountFormComponent
    ],
    exports: [
        AccountEditDialogComponent , AccountFormComponent
    ],
    entryComponents: [AccountEditDialogComponent]
})
export class AccountManagementModule {}
