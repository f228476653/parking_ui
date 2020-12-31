import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from '.';
import { ApiResponse } from '../shared';
import { Observable } from 'rxjs';
import { GarageExit } from '../shared/garage-exit';
import { Parking } from '../shared/parking';
@Injectable()
export class GarageExitService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getVisibleGarageGroup(): Observable<ApiResponse<string[]>> {
    return this.http.get<ApiResponse<string[]>>(environment.pmsplus_api + `exit_settings/garage_group`);
  }

  getGarageAllSetting(): Observable<ApiResponse<GarageExit[]>> {
    return this.http.get<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `exit_settings`);
  }

  getGarageGroupList(group_name: string): Observable<ApiResponse<GarageExit[]>> {
    return this.http.get<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `exit_settings/garages/` + group_name);
  }

  disableSetting(exit_config_id: number): Observable<ApiResponse<GarageExit[]>> {
    const body = {exit_config_id : exit_config_id};
    console.log(body);
    return this.http.put<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `exit_settings/garage`, body);
  }

  getGarageExitSettingList(garage_id: number): Observable<ApiResponse<GarageExit[]>> {
    return this.http.get<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `exit_settings/garage/` + garage_id);
  }

  getDisableButton(exit_config_id: number, disabled: number): Observable<ApiResponse<GarageExit[]>> {
    const body = {exit_config_id: exit_config_id, disabled: disabled};
    return this.http.put<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `exit_settings/garage/disable_toggle`, body);
  }

  getSaveItems(body: any): Observable<ApiResponse<GarageExit[]>> {
    return this.http.post<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `exit_settings/garage`, body);
  }

  queryGarageExit(query: any): Observable<ApiResponse<GarageExit[]>> {
    const body = {query: query};
    return this.http.post<ApiResponse<GarageExit[]>>(environment.pmsplus_api + `cli/query_exit_settings`, body);
  }

  query_transaction(query: any): Observable<ApiResponse<Parking[]>> {
    return this.http.post<ApiResponse<Parking[]>>(environment.pmsplus_api + `real-time-transaction/get_transaction_by_garage_code`, query);
  }



}
