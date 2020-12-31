import { Injectable } from '@angular/core';
import { Customer, ApiResponse } from '../shared/index';
import { ServicebaseService } from './servicebase.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class CustomerService extends ServicebaseService {

    constructor(private http: HttpClient) {
      super();
    }

  getCustomers(): Observable<ApiResponse<Customer[]>> {
    return this.http.get<ApiResponse<Customer[]>>(environment.pmsplus_api + `customers`);
  }

  getCustomerById(id): Observable<ApiResponse<Customer>> {
    return this.http.get<ApiResponse<Customer>>(environment.pmsplus_api + `customers\\` + id);
  }

  deleteCustomerById(id): Observable<ApiResponse<number>> {
    return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `customers\\` + id);
  }

  updateCustomer(customer: Customer): Observable<ApiResponse<number>> {
    const body = {customer: customer};
    return this.http.put<ApiResponse<number>>(environment.pmsplus_api + `customers`, body);
  }

  addCustomer(customer: Customer): Observable<ApiResponse<number>> {
    const body = {customer: customer};
    return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `customers`, body);
  }

}
