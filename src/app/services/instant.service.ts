import { Injectable } from '@angular/core';
import { ServicebaseService } from './servicebase.service';
import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../login/shared/login';
import { ApiResponse, Instant } from '../shared/index';

@Injectable()
export class InstantService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }

  instant(query: any):
  Observable<ApiResponse<Instant[]>> {
    const body = {page_query: query};
    return this.http.put<ApiResponse<Instant[]>>(environment.pmsplus_api + `real-time-transaction/get_transaction`, body);
  }
  queryInstant(query: any): Observable<ApiResponse<Instant[]>> {
    const body = {page_query: query};
    console.log(body);
    return this.http.put<ApiResponse<Instant[]>>(environment.pmsplus_api + `original_real_time_transaction/query_pms_transaction`, body);
  }
  queryPadInstant(query: any): Observable<ApiResponse<Instant[]>> {
    const body = {page_query: query};
    console.log(body);
    return this.http.put<ApiResponse<Instant[]>>(environment.pmsplus_api + `real-time-transaction-pad/get_transaction_pad`, body);
  }
  queryPV3Instant(query: any): Observable<ApiResponse<Instant[]>> {
    const body = {page_query: query};
    console.log(body);
    return this.http.post<ApiResponse<Instant[]>>(environment.pmsplus_api + `real-time-transaction/get_transaction_by_garage_code`, body);
  }
}
