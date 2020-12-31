import { Injectable } from '@angular/core';
import { ServicebaseService } from './servicebase.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Garage, ApiResponse } from '../shared/index';
import { GarageDevice } from '../shared/garage_device';

import { GarageTicketTransactionICash } from '../shared/garage-ticket-transaction-icash';
import { GarageTicketTransactionIPass } from '../shared/garage-ticket-transaction-ipass';
import { GarageTicketTransactionHappyCash } from '../shared/garage-ticket-transaction-happycash';

@Injectable()
export class GarageService extends ServicebaseService {

    constructor(private http: HttpClient) {
      super();
    }

    getGarageDevice(garage_id: number, device_type: string): Observable<ApiResponse<any>> {
      return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `device/garage/` + garage_id + `/` + device_type);
    }

    getGarages(): Observable<ApiResponse<Garage[]>> {
      return this.http.get<ApiResponse<Garage[]>>(environment.pmsplus_api + `garages`);
    }

    getGaragesByCustomerId(customer_id: number): Observable<ApiResponse<Garage[]>> {
      return this.http.get<ApiResponse<Garage[]>>(environment.pmsplus_api + `garages\\customer_id\\` + customer_id);
    }

    getGarageAmountByCustomerId(customer_id: number): Observable<ApiResponse<number>> {
      return this.http.get<ApiResponse<number>>(environment.pmsplus_api + `garages\\amount\\customer_id\\` + customer_id);
    }

    addGarage(garage: Garage, garage_device: GarageDevice, device_type: string[]): Observable<ApiResponse<Garage>> {
      const body = {garage: garage, iBox: garage_device, device_type: device_type};
      // console.log('insert look');
      // console.log(body);
      return this.http.post<ApiResponse<Garage>>(environment.pmsplus_api + `garage`, body);
    }

    updateGarage(data: Garage, garage_device: GarageDevice, device_type: string[]): Observable<ApiResponse<any>> {
      const body = {garage: data, iBox: garage_device, device_type: device_type};
      // console.log('update look');
      // console.log(body);
      return this.http.put<ApiResponse<Garage>>(environment.pmsplus_api + `garage`, body);
    }

    getGarageById(id: string|number): Observable<ApiResponse<Garage>> {
      return this.http.get<ApiResponse<Garage>>(environment.pmsplus_api + `garage\\` + id);
    }
    deleteGarageById(id): Observable<ApiResponse<number>> {
      return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `garage\\` + id);
    }
    // getTaiwanCities(): Observable<ApiResponse<any>> {
    //   return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `exit_settings`);
    // }

    getGaragesByGarageGroupId(garage_group_id: string|number): Observable<ApiResponse<Garage[]>> {
      return this.http.get<ApiResponse<Garage[]>>(environment.pmsplus_api + `garages\\garage_group_id\\` + garage_group_id);
    }
    getTaiwanCities(): Observable<ApiResponse<any>> {
      return this.http.get<ApiResponse<any>>(`http://api.opencube.tw/twzipcode/get-citys/`);
    }

    isGarageCodeExist(garage_code: string): Observable<ApiResponse<any>> {
      return this.http.get<ApiResponse<Garage>>(environment.pmsplus_api + `garages\\` + garage_code);
    }
  }

