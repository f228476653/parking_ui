import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../shared';
import { Observable } from 'rxjs';
import { DevicePV } from '../shared/device_pv';
import { PricingRuleListView } from '../shared/fee';

@Injectable({
  providedIn: 'root'
})
export class FeeServiceService {
  constructor(private http: HttpClient) {
   }

  save_or_update_fee_args(feeRule, feePara1, feePara2): Observable<ApiResponse<any>> {
    const body = {'feeRule': feeRule, 'feePara1': feePara1, 'feePara2': feePara2};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `fee`, body);
  }

  get_fee_args_by_garage_id(garage_id: number, car_type: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `fee/` + garage_id + `/` + car_type);
  }

  delete_fee_args_by_garage_id(garageID: number): Observable<ApiResponse<DevicePV[]>> {
    return this.http.get<ApiResponse<DevicePV[]>>(environment.pmsplus_api + `fee/` + garageID);
  }

  get_special_day_list(year: number): Observable<ApiResponse<DevicePV[]>> {
    return this.http.get<ApiResponse<DevicePV[]>>(environment.pmsplus_api + `special_day/` + year);
  }

  get_pricing_rule_list(): Observable<ApiResponse<PricingRuleListView[]>> {
    return this.http.get<ApiResponse<PricingRuleListView[]>>(environment.pmsplus_api + `pricing_rule_list`);
  }
}
