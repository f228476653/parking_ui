import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from '.';
import { ApiResponse } from '../shared';
import { Observable } from 'rxjs';
import { DevicePV } from '../shared/device_pv';
import { DeviceIbox } from '../shared/device_ibox';
import { DeviceView } from '../layout/garage-management/device-form/view/device_view';
import { timer } from 'rxjs/observable/timer';
import { interval } from 'rxjs/observable/interval';
import { map, tap, retryWhen, delayWhen } from 'rxjs/operators';
@Injectable()
export class DeviceService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
   }

  // 以下 NEW

  get_customer_device_argument_by_customer_id(customer_id: number, device_type: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `device/customer/` + customer_id + '/' + device_type);
  }

  store_customer_device_args(customer_device_data): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `device/customer/add_or_update`, customer_device_data);
  }

  store_garage_device_args(garage_device_data): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `device/garage/add_or_update`, garage_device_data);
  }

  check_enable_card_type(customer_id: number, device_type: string): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<number>>(environment.pmsplus_api + `enable_card_case/` + customer_id + `/` + device_type);
  }

  // 設備層級相關

  get_device_by_device_id(device_type: string, device_id: number): Observable<ApiResponse<DeviceIbox>> {
    return this.http.get<ApiResponse<DeviceIbox>>(environment.pmsplus_api + `device/single/` + device_type + `/` + device_id);
  }

  get_all_device_by_garage_id(garage_id: number): Observable<ApiResponse<DeviceView[]>> {
    return this.http.get<ApiResponse<DeviceView[]>>(environment.pmsplus_api + `device/all/` + garage_id);
  }

  save_device(device_bean): Observable<ApiResponse<DeviceIbox>> {
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `device/add_or_update`, device_bean);
  }

  delete_device_by_device_id(device_type: string, device_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `device/delete/` + device_type + `/` + device_id);
  }

  export_csv_to_cloud(data): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `device/export`, data);
  }

  is_duplicate_ip_from_same_garage(garage_id: number, IP: number): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(environment.pmsplus_api + `device/exist/` + garage_id + `/` + IP);
  }

  // update_device(device_bean): Observable<ApiResponse<DeviceIbox>> {
  //   return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `device/update`, device_bean);
  // }
  // 以上 NEW  下面待報廢

  // show_all_device_pv_by_garage_id(garageID: number): Observable<ApiResponse<DevicePV[]>> {
  //   return this.http.get<ApiResponse<DevicePV[]>>(environment.pmsplus_api + `device/pv/all/` + garageID);
  // }
  show_device_pv_by_device_id(devicePvID: number): Observable<ApiResponse<DevicePV>> {
    return this.http.get<ApiResponse<DevicePV>>(environment.pmsplus_api + `device/pv/` + devicePvID);
  }
  // add_device_pv(deviceBean): Observable<ApiResponse<any>> {
  //   return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `device/pv`, deviceBean);
  // }
  // update_device_pv_by_device_pv_id(deviceBean): Observable<ApiResponse<any>> {
  //   return this.http.put<ApiResponse<any>>(environment.pmsplus_api + `device/pv/update`, deviceBean);
  // }
  // delete_device_pv_by_device_pv_id(deviceBean): Observable<ApiResponse<any>> {
  //   return this.http.put<ApiResponse<any>>(environment.pmsplus_api + `device/pv/delete`, deviceBean);
  // }

  // TODO 廠商階段設定參數 現在沒有選擇ibox或pv3
  add_customer_device_parameter(customerDeviceBean): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(environment.pmsplus_api + `device/customer/parameter`, customerDeviceBean);
  }
  add_gerage_device_parameter(garageDeviceBean): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(environment.pmsplus_api + `device/garage/parameter`, garageDeviceBean);
  }
  add_device_parameter(deviceBean): Observable<ApiResponse<any>> {
    return this.http.put<ApiResponse<any>>(environment.pmsplus_api + `device/parameter`, deviceBean);
  }
  get_sse_device_event(): Observable<ApiResponse<MessageEvent>> {
    return Observable.create(observer => {
      const eventSource = new EventSource(environment.pmsplus_api + `device/event/sse`);
      eventSource.onmessage = x => observer.next(x.data);
      eventSource.onerror = x => observer.error(x);
      return () => {
        eventSource.close();
      };
    });
  }
}
