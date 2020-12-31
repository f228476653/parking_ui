import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../app-material.module';
import { RoleManagementRoutingModule } from './role-management-routing.module';
import { RoleManagementComponent } from './role-management.component';
import { RoleEditDialogComponent } from './role-edit-dialog/role-edit-dialog.component';
import { SharedComponentModule } from '../components/shared-component.module';
import { RoleFormComponent } from './role-form/role-form.component';


@NgModule({
  imports: [
      CommonModule,
      NgbCarouselModule.forRoot(),
      NgbAlertModule.forRoot(),
      RoleManagementRoutingModule,
      AppMaterialModule,
      FormsModule,
      SharedComponentModule
  ],
  declarations: [
      RoleManagementComponent, RoleEditDialogComponent, RoleFormComponent
  ],
  exports: [RoleManagementComponent, RoleEditDialogComponent, RoleFormComponent]
  ,
  entryComponents: [RoleEditDialogComponent]
})
export class RoleManagementModule {}
