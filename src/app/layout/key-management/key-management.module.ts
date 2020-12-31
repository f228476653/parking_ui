import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';


import { KeyManagementRoutingModule } from './key-management-routing.module';
import { KeyManagementComponent } from './key-management.component';
import { KeyEditDialogComponent } from './key-edit-dialog/key-edit-dialog.component';
import { KeyViewDialogComponent } from './key-view-dialog/key-view-dialog.component';
@NgModule({
  imports: [
      CommonModule,
      NgbCarouselModule.forRoot(),
      NgbAlertModule.forRoot(),
      KeyManagementRoutingModule,
      AppMaterialModule,
      FormsModule
  ],
  declarations: [
      KeyManagementComponent, KeyEditDialogComponent, KeyViewDialogComponent
  ],
  exports: [KeyManagementComponent],
  entryComponents: [KeyEditDialogComponent, KeyViewDialogComponent]
})
export class KeyManagementModule {}
