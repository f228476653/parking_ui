import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { User } from '../../shared/index';
import { ForgetPassword } from '../../shared/forget-password';
import { ApiResponse } from '../../shared/index';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  // account: string;
  queryReset: ForgetPassword;
  queryResetResponse = new ApiResponse<User>();
  initResponse = new ApiResponse<User>();
  accountEditable = true;
  user: User = new User();
  event: KeyboardEvent;
  new_password: string;
  confirm_new_password: string;
  pwdIsSame = true;
  accountDisabled = true;
  token: string;

  constructor(public router: Router, private loginService: LoginService , private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');
    this.loginService.get_reset_password_account(this.token).subscribe(response => {
        this.initResponse = response;
        if (this.initResponse.data.account ===  '' ) {
          this.initResponse.has_error = true;
          this.initResponse.message = '已遇時，請重新申請';
        } else {
          console.log(this.user);
          this.user.account = this.initResponse.data.account;
          this.user.account_id = this.initResponse.data.account_id;
        }
      }, err => {
      this.initResponse.has_error = true;
      this.initResponse.message = err.message;
      });
    }

  checkPassword() {
    this.pwdIsSame = true;
    if (this.new_password && this.confirm_new_password
      && this.new_password !== this.confirm_new_password) {
      this.pwdIsSame = false;
    }
  }

  onQueryReset() {
    if (this.pwdIsSame === true && this.user.account !== '') {
      console.log(this.user.account);
      this.user.password = this.new_password;
      this.loginService.update_password(this.user).subscribe(response => {
        this.queryResetResponse = response;
        console.log(response);
        if (!this.queryResetResponse.has_error) {
            this.queryResetResponse.message = '請以新密碼登入';
          }
        }, err => {
        this.queryResetResponse.has_error = true;
        this.queryResetResponse.message = err.message;
      });
    }
  }
}
