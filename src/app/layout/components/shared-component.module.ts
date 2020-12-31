import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from '../../app-material.module';
import { FormsModule } from '@angular/forms';
import { SharedSearchFieldComponent } from './shared-search-field/shared-search-field.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { FileUploaderToolComponent } from './file-uploader-tool/file-uploader-tool.component';
import { KeyManagementModule } from '../key-management/key-management.module';
import { FileUploadModule } from 'ng2-file-upload';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        AppMaterialModule,
        FormsModule,
        RouterModule,
        KeyManagementModule,
        FileUploadModule,
        NgSelectModule
    ],
    declarations: [
        SharedSearchFieldComponent, HeaderComponent , BreadcrumbComponent, ConfirmButtonComponent, FileUploaderToolComponent
    ],
    exports: [SharedSearchFieldComponent, HeaderComponent, BreadcrumbComponent, ConfirmButtonComponent, FileUploaderToolComponent]
})
export class SharedComponentModule {
}
