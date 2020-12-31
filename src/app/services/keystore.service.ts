import { Injectable } from '@angular/core';
import { ServicebaseService } from './servicebase.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { KeystoreStatusEnum } from '../shared/keystore-status-enum';
import { ApiResponse, Keystore } from '../shared/index';

@Injectable()
export class KeystoreService extends ServicebaseService {

    constructor(private http: HttpClient) {
      super();
    }

    getKeystores(): Observable<ApiResponse<Keystore[]>> {
      return this.http.get<ApiResponse<Keystore[]>>(environment.pmsplus_api + `keystores`);
    }

    deleteKeystoreById(id): Observable<ApiResponse<number>> {
      return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `keystores\\` + id);
    }

    updateKeystore(keystore: Keystore): Observable<ApiResponse<Keystore>> {
      const body = {keystore: keystore};
      return this.http.put<ApiResponse<Keystore>>(environment.pmsplus_api + `keystores`, body);
    }

    addKeystore(keystore: Keystore): Observable<ApiResponse<number>> {
      const body = {keystore: keystore};
      return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `keystores`, body);
    }

    getKeystoreById(keystore_id: number): Observable<ApiResponse<Keystore>> {
      return this.http.get<ApiResponse<Keystore>>(environment.pmsplus_api + `keystore` + keystore_id);
    }

    getKeystoresByCustomerId(customer_id: number): Observable<ApiResponse<Keystore[]>> {
      return this.http.get<ApiResponse<Keystore[]>>(environment.pmsplus_api + `keystores\\customer_id\\` + customer_id);
    }

    getKeystoresById(id: number): Observable<ApiResponse<Keystore>> {
      return this.http.get<ApiResponse<Keystore>>(environment.pmsplus_api + `keystores\\` + id);
    }

    get_keystores_status(): Observable<ApiResponse<KeystoreStatusEnum>> {
      return this.http.get<ApiResponse<KeystoreStatusEnum>>(environment.pmsplus_api + `keystorestatus`);
    }
  }
