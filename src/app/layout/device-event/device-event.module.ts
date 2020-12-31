import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceEventComponent } from './device-event.component';
import { DeviceEventRoutingModule } from './device-event-routing.module';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DeviceEventRoutingModule,
        AppMaterialModule,
        FormsModule,
        MatStepperModule,
        ReactiveFormsModule
    ],
    declarations: [
        DeviceEventComponent
    ]
})
export class DeviceEventModule {
}
