import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from '.';
import { ApiResponse } from '../shared';
import { Observable } from 'rxjs';
import { ShiftCheckout } from '../shared/shift-checkout';

@Injectable()
export class ShiftCheckoutService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
   }

   get_shift_checkout_by_condition(shiftCheckout: ShiftCheckout): Observable<ApiResponse<ShiftCheckout[]>> {
    const body = {query: shiftCheckout};
    // tslint:disable-next-line:max-line-length
    return this.http.put<ApiResponse<ShiftCheckout[]>>(environment.pmsplus_api + `shift-checkout-controller/get_shift_checkout_by_condition`, body);
  }
}
