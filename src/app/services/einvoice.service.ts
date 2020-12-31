import { Injectable } from '@angular/core';
import { ApiResponse, EinvoiceConfig } from '../shared/index';
import { ServicebaseService } from './servicebase.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EinvoiceService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }
  addCustomerLevelEinvoiceConfig(einvoiceConfigs, customer_id): Observable<ApiResponse<number>> {
    const body = {einvoice_configs: einvoiceConfigs , customer_id: customer_id};
    return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `einvoice-config/add_einvoice_config`, body);
  }

  updateCustomerLevelEinvoiceConfig(einvoiceConfigs, customer_id): Observable<ApiResponse<number>> {
    const body = {einvoice_configs: einvoiceConfigs , customer_id: customer_id};
    return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `einvoice-config/update_einvoice_config`, body);
  }

  getCustomerLevelEinvoiceConfig(customer_id): Observable<ApiResponse<EinvoiceConfig[]>> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<ApiResponse<EinvoiceConfig[]>>(environment.pmsplus_api + `einvoice-config/get_customer_einvoice_config/` + customer_id);
  }
}
