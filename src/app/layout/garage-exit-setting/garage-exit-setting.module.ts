import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { GarageExitSettingRoutingModule } from './garage-exit-setting-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { KeyManagementModule } from '../key-management/key-management.module';
import { GarageExitSettingComponent } from './garage-exit-setting.component';
import { GarageExitDialogComponent } from './garage-exit-dialog/garage-exit-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        GarageExitSettingRoutingModule,
        AppMaterialModule,
        FormsModule,
        KeyManagementModule
    ],
    declarations: [
        GarageExitSettingComponent, GarageExitDialogComponent
    ],
    entryComponents: [ GarageExitDialogComponent ]
})
export class GarageExitSettingModule {}
