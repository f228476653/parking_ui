import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';



import { AppMaterialModule } from '../../app-material.module';

import { ChartLineBarRoutingModule } from './chart-line-bar-routing.module';
import { ChartLineBarComponent } from './chart-line-bar.component';

@NgModule({
    imports: [
        CommonModule,
        ChartLineBarRoutingModule,
        AppMaterialModule
    ],
    declarations: [
        ChartLineBarComponent
    ],
    entryComponents: []
})
export class ChartLineBarModule {}
