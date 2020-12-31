import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../app-material.module';
import { GarageGroupManagementRoutingModule } from './garage-group-management-routing.module';
import { GarageGroupDialogComponent } from './garage-group-dialog/garage-group-dialog.component';
import { GarageGroupFormComponent } from './garage-group-form/garage-group-form.component';
import { GarageGroupManagementComponent } from './garage-group-management.component';
import { SharedComponentModule } from '../components/shared-component.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        GarageGroupManagementRoutingModule,
        AppMaterialModule,
        SharedComponentModule
    ],
    declarations: [
        GarageGroupManagementComponent, GarageGroupDialogComponent, GarageGroupFormComponent
    ],
    entryComponents: [GarageGroupDialogComponent]
})
export class GarageGroupManagementModule {}
