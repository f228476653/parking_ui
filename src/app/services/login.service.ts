import { Injectable } from '@angular/core';
import { ServicebaseService } from './servicebase.service';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login/shared/login';
import { ForgetPassword } from '../shared/forget-password';
import { ApiResponse, User } from '../shared/index';

/**
 * consume mec-dataservice to login.
 */
@Injectable()
export class LoginService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }

  login(account: string, password: string, rem: boolean = false): Observable<ApiResponse<Login>> {
    const body = {account: account, passwd: password, rem: rem};
    return this.http.post<ApiResponse<Login>>(environment.pmsplus_api + `login`, body);
  }

  forget_password(email: string): Observable<ApiResponse<ForgetPassword>> {
    const body = {email: email};
    return this.http.put<ApiResponse<ForgetPassword>>(environment.pmsplus_api + `login\\au\\forget_password`, body);
  }

  update_password(user: User): Observable<ApiResponse<User>> {
    const body = {user: user};
    return this.http.put<ApiResponse<User>>(environment.pmsplus_api + `account\\au\\update_password`, body);
  }

  get_reset_password_account(token: string): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(environment.pmsplus_api + `login\\au\\get_reset_password_account\\` + token);
  }
}
