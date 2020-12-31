import { Injectable } from '@angular/core';
import { ServicebaseService } from './servicebase.service';
import { HttpClient } from '@angular/common/http';
import { EntryGate, ApiResponse } from '../shared/index';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class EntryGateService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getEntryGates(): Observable<ApiResponse<EntryGate[]>> {
    return this.http.get<ApiResponse<EntryGate[]>>(environment.pmsplus_api + `entry-gates`);
  }

  getEntryGateById(id): Observable<ApiResponse<EntryGate>> {
    return this.http.get<ApiResponse<EntryGate>>(environment.pmsplus_api + `entry-gate\\` + id);
  }

  getEntryGatesByCustomerId(customer_id: number): Observable<ApiResponse<EntryGate[]>> {
    return this.http.get<ApiResponse<EntryGate[]>>(environment.pmsplus_api + `entry-gate\\customer_id\\` + customer_id);
  }

  deleteEntryGateById(id): Observable<ApiResponse<number>> {
    return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `entry-gate\\` + id);
  }

  updateEntryGate(data: EntryGate): Observable<ApiResponse<EntryGate>> {
    const body = {entry_gate: data};
    return this.http.put<ApiResponse<EntryGate>>(environment.pmsplus_api + `entry-gate`, body);
  }

  addEntryGate(data: EntryGate): Observable<ApiResponse<EntryGate>> {
    const body = {entry_gate: data};
    return this.http.post<ApiResponse<EntryGate>>(environment.pmsplus_api + `entry-gate`, body);
  }

  /**
   * check if the serial number is used
   * @param garage_id garage id
   * @param sn serial number of gateway
   */
  getEntryGateSnExistOrNot(garage_id, sn): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(environment.pmsplus_api + `entry-gate\\garage\\` + garage_id + '\\sn\\' + sn);
  }
}
