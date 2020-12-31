import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { CustomerService } from './services/customer.service';
import localeZhTw from '@angular/common/locales/zh-Hant';
import localeZhCn from '@angular/common/locales/zh';
import localeFrCa from '@angular/common/locales/fr-CA';
import localeFrCaExtra from '@angular/common/locales/extra/fr-CA';
import { registerLocaleData } from '@angular/common';
import { JwtAuthInterceptorService } from './services/jwt-auth-interceptor.service';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { KeystoreService } from './services/keystore.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GarageService } from './services/garage.service';
import { CliService } from './services/cli.service';
import { EntryGateService } from './services/index';
import { GarageGroupService } from './services/garage-group.service';
import { SessionStorage } from './shared/session-storage';
import { InstantService } from './services/instant.service';
import { GarageExitService } from './services/garage-exit.service';
import { DeviceService } from './services/device.service';
import { IsGarageCodeExistValidatorDirective, TaxNumberValidatorDirective,
  IsDuplicateIPValidatorDirective, EqualValidatorDirective, CharacterLengthValidatorDirective  } from './shared/form-valiadtor';
import { RegularlyReportsService } from './services/regularly-reports.service';
import { TicketTransactionService } from './services/ticket-transaction.service';
import { FileUploaderToolService } from './services/file-uploader-tool.service';
import { ShiftCheckoutService } from './services/shift-checkout.service';

registerLocaleData(localeZhCn);
registerLocaleData(localeZhTw);
registerLocaleData(localeFrCa, localeFrCaExtra);


const routes: Routes = [
   // { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: '', loadChildren: './login/login.module#LoginModule' },
    { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    IsGarageCodeExistValidatorDirective,
    TaxNumberValidatorDirective,
    EqualValidatorDirective,
    CharacterLengthValidatorDirective,
    IsDuplicateIPValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgHttpLoaderModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [AuthGuard, LoginService, UserService, GarageService, SessionStorage
    , EntryGateService, GarageGroupService
    , CliService, InstantService, GarageExitService, DeviceService, RegularlyReportsService, ShiftCheckoutService
    , TicketTransactionService, FileUploaderToolService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtAuthInterceptorService,
      multi: true,
    }, KeystoreService, CustomerService, { provide: LOCALE_ID, useValue: 'zh-Hant' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
