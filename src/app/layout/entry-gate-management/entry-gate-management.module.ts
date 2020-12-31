import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../app-material.module';
import { EntryGateManagementComponent } from './entry-gate-management.component';
import { EntryGateManagementRoutingModule } from './entry-gate-management-routing.module';
import { EntryGateFormComponent } from './entry-gate-form/entry-gate-form.component';
import { EntryGateDialogComponent } from './entry-gate-dialog/entry-gate-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        EntryGateManagementRoutingModule,
        FormsModule,
        AppMaterialModule
    ],
    declarations: [
        EntryGateManagementComponent, EntryGateDialogComponent, EntryGateFormComponent
    ],
    entryComponents: [EntryGateDialogComponent]
})
export class EntryGateManagementModule {}
