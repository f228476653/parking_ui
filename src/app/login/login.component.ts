import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from '../services/login.service';
import { Login } from './shared/login';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { ApiResponse } from '../shared/index';
import { SessionStorage } from '../shared/session-storage';
import { UserService } from '../services';
import { MatDialog } from '@angular/material';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  @ViewChild('btn_login') btnLogin: ElementRef;
  account: string;
  password: string;
  isRememberMe: boolean;
  loginResponse: ApiResponse<Login>;
  event: KeyboardEvent;
  dialogWidth = '800px';

  constructor(public router: Router, private loginService: LoginService, public sessionStorage: SessionStorage
    , private userService: UserService, public forgetPwdDialog: MatDialog ) {
    this.loginResponse = new ApiResponse<Login>();
  }


  ngOnInit() {
    this.sessionStorage.clear();
  }

  onLoggedin() {
    this.loginResponse = new ApiResponse();
    this.loginService.login(this.account, this.password, this.isRememberMe).subscribe(response => {
      this.loginResponse = response;
      if (!this.loginResponse.has_error) {
        this.sessionStorage.setAccount(this.loginResponse.data.account);
          this.sessionStorage.setCustomerId(this.loginResponse.data.customer_id);
          this.sessionStorage.setAccountId(this.loginResponse.data.account_id);
          this.sessionStorage.setIsRememberMe(this.isRememberMe);
          this.sessionStorage.setIsSuperUser(Boolean(this.loginResponse.data.is_superuser));
          this.sessionStorage.setToken(this.loginResponse.data.token);
          this.sessionStorage.setUserName(this.loginResponse.data.user_name);
          this.sessionStorage.setIsCustomerRoot(Boolean(this.loginResponse.data.is_customer_root));
          this.userService.getPermissionByRoleId(this.loginResponse.data.role_id).subscribe( res => {
          this.sessionStorage.setRolePermission(res.data);
          this.router.navigate(['']);
          this.sessionStorage.setIsLoggedIn(true);
          console.log(this.sessionStorage);
          console.log('------');
          console.log(this.router);
        });
      }
    }, err => {
      this.loginResponse.has_error = true;
      this.loginResponse.message = err.message;
    });

  }
  forgetPwd() {
    const dialogRef = this.forgetPwdDialog.open(ForgetPasswordComponent, {
      width: this.dialogWidth,
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    this.event = event;
    if (13 === this.event.keyCode) {
      this.onLoggedin();
      // this.btnLogin.nativeElement.click();
    }
  }

  isDisplayLoginMessage() {
     if (this.loginResponse &&  this.loginResponse.message) {
       return true;
     }
     return false;
  }
}


