import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from '.';
import { ApiResponse } from '../shared';
import { Observable } from 'rxjs';

@Injectable()
export class RegularlyReportsService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
   }

  get_daily_revenue_report(garage_code: string, the_day: string, paid_type: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api +
       `regularly_report/day_revenue/` + garage_code + '/' + the_day + '/' + paid_type);
  }

  get_monthly_revenue_report(garage_code: string, the_month: string, paid_type: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api +
       `regularly_report/monthly_revenue/` + garage_code + '/' + the_month + '/' + paid_type);
  }

  get_monthly_usage_report(garage_code: string, monthly: string): Observable<ApiResponse<any>> {
    // console.log('準備囉');
    // console.log(garage_code);
    // console.log(monthly);
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `regularly_report/monthly_usage/` + garage_code + '/' + monthly);
  }

}
