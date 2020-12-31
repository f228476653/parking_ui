import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from './servicebase.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AccountingReport, PmsDiffRecords, RecordsAfterHumenClose, AmtDiffRecords
  , CpsDiffRecords, ParkingSettlementRecords } from '../shared/accounting-report';
import { ApiResponse } from '../shared/index';

@Injectable()
export class CliService extends ServicebaseService {

    constructor(private http: HttpClient) {
      super();
    }

    queryAccountingReport(query: any): Observable<ApiResponse<AccountingReport[]>> {
      const body = {query: query};
      return this.http.post<ApiResponse<AccountingReport[]>>(environment.pmsplus_api + `cli/query_accounting`, body);
    }

    queryPmsDiffRecords(query: any): Observable<ApiResponse<PmsDiffRecords[]>> {
      const body = {query: query};
      return this.http.post<ApiResponse<PmsDiffRecords[]>>(environment.pmsplus_api + `cli/query_pms_diff_record`, body);
    }

    queryRecordsAfterManualClose(query: any): Observable<ApiResponse<RecordsAfterHumenClose[]>> {
      const body = {query: query};
      return this.http.post<ApiResponse<RecordsAfterHumenClose[]>>(environment.pmsplus_api + `cli/query_records_after_manual_close`, body);
    }

    queryAmtDiffRecords(query: any): Observable<ApiResponse<AmtDiffRecords[]>> {
      const body = {query: query};
      return this.http.post<ApiResponse<AmtDiffRecords[]>>(environment.pmsplus_api + `cli/query_amt_diff_record`, body);
    }

    queryCpsDiffRecords(query: any): Observable<ApiResponse<CpsDiffRecords[]>> {
      const body = {query: query};
      return this.http.post<ApiResponse<CpsDiffRecords[]>>(environment.pmsplus_api + `cli/query_cps_diff_record`, body);
    }

    queryParkingSettlementRecords(query: any): Observable<ApiResponse<ParkingSettlementRecords[]>> {
      const body = {query: query};
      return this.http.post<ApiResponse<ParkingSettlementRecords[]>>(environment.pmsplus_api + `cli/query_parking_settlement_record`, body);
    }

}
