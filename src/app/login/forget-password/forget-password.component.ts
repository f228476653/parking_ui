import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ForgetPassword } from '../../shared/forget-password';
import { ApiResponse } from '../../shared/index';
import { UserService } from '../../services';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  // account: string;
  queryReset = new ForgetPassword();
  queryResetResponse = new ApiResponse<ForgetPassword>();
  event: KeyboardEvent;
  pwdIsSame = true;

  constructor(public dialogRef: MatDialogRef<ForgetPasswordComponent>
    , public router: Router, private loginService: LoginService ) {
  }

  ngOnInit() { }



  onQueryReset() {
    this.loginService.forget_password(this.queryReset.email).subscribe(response => {
      this.queryResetResponse = response;
      if (!this.queryResetResponse.has_error) {
          this.queryResetResponse.message = '請至Email信箱點連結重設密碼';
        }
      }, err => {
      this.queryResetResponse.has_error = true;
      this.queryResetResponse.message = err.message;
    });
  }

  // @HostListener('window:keyup', ['$event'])
  // keyboardInput(event: KeyboardEvent) {
  //   this.event = event;
  //   if (13 === this.event.keyCode) {
  //     this.onLoggedin();
  //     // this.btnLogin.nativeElement.click();
  //   }
  // }

  // isDisplayLoginMessage() {
  //    if (this.loginResponse &&  this.loginResponse.message) {
  //      return true;
  //    }
  //    return false;
  // }

}
