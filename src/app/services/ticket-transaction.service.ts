import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from '.';
import { ApiResponse } from '../shared';
import { Observable } from 'rxjs';

import { GarageTicketTransactionICash } from '../shared/garage-ticket-transaction-icash';
import { GarageTicketTransactionIPass } from '../shared/garage-ticket-transaction-ipass';
import { GarageTicketTransactionHappyCash } from '../shared/garage-ticket-transaction-happycash';
import { Garage } from '../shared/garage';
import { CustomerTicketTransactionICash } from '../shared/customer-ticket-transaction-icash';
import { CustomerTicketTransactionIPass } from '../shared/customer-ticket-transaction-ipass';
import { CustomerTicketTransactionHappyCash } from '../shared/customer-ticket-transaction-happycash';
import { Customer } from '../shared/customer';

@Injectable()
export class TicketTransactionService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
   }

  // 愛金卡
  // 場站
  getGarageTicketTransactionICash(garage_id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/icash/` + garage_id);
  }
  addGarageTicketTransactionICash(garage: Garage, garage_ticket_transaction_icash: GarageTicketTransactionICash): Observable<ApiResponse<any>> {
    const body = {garage: garage, iCash: garage_ticket_transaction_icash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/icash/add`, body);
  }
  updateGarageTicketTransactionICash(garage: Garage, garage_ticket_transaction_icash: GarageTicketTransactionICash): Observable<ApiResponse<any>> {
    const body = {garage: garage, iCash: garage_ticket_transaction_icash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/icash/update`, body);
  }
  deleteGarageTicketTransactionICash(garage_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/icash/delete/` + garage_id);
  }
  // 業者
  getCustomerTicketTransactionICash(customer_id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/icash/` + customer_id);
  }
  addCustomerTicketTransactionICash(customer: Customer, customer_ticket_transaction_icash: CustomerTicketTransactionICash): Observable<ApiResponse<any>> {
    const body = {customer: customer, iCash: customer_ticket_transaction_icash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/icash/add`, body);
  }
  updateCustomerTicketTransactionICash(customer: Customer, customer_ticket_transaction_icash: CustomerTicketTransactionICash): Observable<ApiResponse<any>> {
    const body = {customer: customer, iCash: customer_ticket_transaction_icash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/icash/update`, body);
  }
  deleteCustomerTicketTransactionICash(customer_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/icash/delete/` + customer_id);
  }


  // 一卡通
  // 場站
  getGarageTicketTransactionIPass(garage_id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/ipass/` + garage_id);
  }

  addGarageTicketTransactionIPass(garage: Garage, garage_ticket_transaction_ipass: GarageTicketTransactionIPass): Observable<ApiResponse<any>> {
    const body = {garage: garage, iPass: garage_ticket_transaction_ipass};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/ipass/add`, body);
  }
  updateGarageTicketTransactionIPass(garage: Garage, garage_ticket_transaction_ipass: GarageTicketTransactionIPass): Observable<ApiResponse<any>> {
    const body = {garage: garage, iPass: garage_ticket_transaction_ipass};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/ipass/update`, body);
  }
  deleteGarageTicketTransactionIPass(garage_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/ipass/delete/` + garage_id);
  }
  // 業者
  getCustomerTicketTransactionIPass(customer_id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/ipass/` + customer_id);
  }
  addCustomerTicketTransactionIPass(customer: Customer, customer_ticket_transaction_ipass: CustomerTicketTransactionIPass): Observable<ApiResponse<any>> {
    const body = {customer: customer, iPass: customer_ticket_transaction_ipass};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/ipass/add`, body);
  }
  updateCustomerTicketTransactionIPass(customer: Customer, customer_ticket_transaction_ipass: CustomerTicketTransactionIPass): Observable<ApiResponse<any>> {
    const body = {customer: customer, iPass: customer_ticket_transaction_ipass};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/ipass/update`, body);
  }
  deleteCustomerTicketTransactionIPass(customer_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/ipass/delete/` + customer_id);
  }


  // 遠鑫卡(有錢卡)
  // 場站
  getGarageTicketTransactionHappyCash(garage_id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/happycash/` + garage_id);
  }
  addGarageTicketTransactionHappyCash(garage: Garage, garage_ticket_transaction_happycash: GarageTicketTransactionHappyCash): Observable<ApiResponse<any>> {
    const body = {garage: garage, happyCash: garage_ticket_transaction_happycash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/happycash/add`, body);
  }
  updateGarageTicketTransactionHappyCash(garage: Garage, garage_ticket_transaction_happycash: GarageTicketTransactionHappyCash): Observable<ApiResponse<any>> {
    const body = {garage: garage, happyCash: garage_ticket_transaction_happycash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/happycash/update`, body);
  }
  deleteGarageTicketTransactionHappyCash(garage_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/garage/happycash/delete/` + garage_id);
  }
  // 業者
  getCustomerTicketTransactionHappyCash(customer_id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/happycash/` + customer_id);
  }
  addCustomerTicketTransactionHappyCash(customer: Customer, customer_ticket_transaction_happycash: CustomerTicketTransactionHappyCash): Observable<ApiResponse<any>> {
    const body = {customer: customer, happyCash: customer_ticket_transaction_happycash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/happycash/add`, body);
  }
  updateCustomerTicketTransactionHappyCash(customer: Customer, customer_ticket_transaction_happycash: CustomerTicketTransactionHappyCash): Observable<ApiResponse<any>> {
    const body = {customer: customer, happyCash: customer_ticket_transaction_happycash};
    return this.http.post<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/happycash/update`, body);
  }
  deleteCustomerTicketTransactionHappyCash(customer_id: number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(environment.pmsplus_api + `ticket_transaction/customer/happycash/delete/` + customer_id);
  }











}