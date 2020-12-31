import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AppMaterialModule } from '../app-material.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule,
        AppMaterialModule],
    declarations: [LoginComponent, ForgetPasswordComponent, ResetPasswordComponent],
    entryComponents: [ForgetPasswordComponent]
})
export class LoginModule {}
