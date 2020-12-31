import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { InvoiceSettingRoutingModule } from './invoice-setting-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { InvoiceSettingComponent } from './invoice-setting.component';
import { InvoiceSettingDialogComponent } from './invoice-setting-dialog/invoice-setting-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        InvoiceSettingRoutingModule,
        AppMaterialModule,
        FormsModule
    ],
    declarations: [
        InvoiceSettingComponent,
        InvoiceSettingDialogComponent,
    ],
    entryComponents: [InvoiceSettingDialogComponent]
})
export class InvoiceSettingModule {}
