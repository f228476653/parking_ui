import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { PageData, PageMode } from '../../../shared/page-mode';
import { CliService } from '../../../services/cli.service';
import { PmsDiffRecords, DetailQuery, RecordsAfterHumenClose, AmtDiffRecords, CpsDiffRecords,
  ParkingSettlementRecords } from '../../../shared/accounting-report';
import { ApiResponse, SessionStorage } from '../../../shared/index';


@Component({
  selector: 'app-accounting-report-detail-dialog',
  templateUrl: './accounting-report-detail-dialog.component.html',
  styleUrls: ['./accounting-report-detail-dialog.component.css']
})
export class AccountingReportDetailDialogComponent implements OnInit {

    email = new FormControl('', [Validators.required, Validators.email]);
    savedResponse: ApiResponse<number> = new ApiResponse<number>();
    selectedRole;
    pmsDiffRecordsResponse = new ApiResponse<PmsDiffRecords[]>();
    pmsDiffRecordsDataSource: MatTableDataSource<PmsDiffRecords> = new MatTableDataSource<PmsDiffRecords>();

    recordsAfterHumenCloseResponse = new ApiResponse<RecordsAfterHumenClose[]>();
    recordsAfterHumenCloseDataSource: MatTableDataSource<RecordsAfterHumenClose> = new MatTableDataSource<RecordsAfterHumenClose>();

    amtDiffRecordsResponse = new ApiResponse<AmtDiffRecords[]>();
    amtDiffRecordsDataSource: MatTableDataSource<AmtDiffRecords> = new MatTableDataSource<AmtDiffRecords>();

    cpsDiffRecordsResponse = new ApiResponse<CpsDiffRecords[]>();
    cpsDiffRecordsDataSource: MatTableDataSource<CpsDiffRecords> = new MatTableDataSource<CpsDiffRecords>();

    parkingSettlementRecordsResponse = new ApiResponse<ParkingSettlementRecords[]>();
    parkingSettlementRecordsDataSource: MatTableDataSource<ParkingSettlementRecords> = new MatTableDataSource<ParkingSettlementRecords>();

    query: DetailQuery = new DetailQuery();
    constructor(
      public dialogRef: MatDialogRef<AccountingReportDetailDialogComponent>
      , @Inject(MAT_DIALOG_DATA) public pageData: PageData<DetailQuery, PageMode>
      , public sessionStorage: SessionStorage, public cliService: CliService) {
      }

      ngOnInit(): void {
        this.query = this.pageData.data;
        this.checkToken();
        this.cliService.queryPmsDiffRecords(this.query).subscribe( res => {
          this.pmsDiffRecordsResponse = res;
          res.data.forEach( x => {
            x.card_no = 'EE' + x.card_no;
          });
          this.pmsDiffRecordsDataSource = new MatTableDataSource(res.data);
        });
        this.cliService.queryRecordsAfterManualClose(this.query).subscribe( res => {
            this.recordsAfterHumenCloseResponse = res;
            this.recordsAfterHumenCloseDataSource = new MatTableDataSource(res.data);
        });
        this.cliService.queryAmtDiffRecords(this.query).subscribe( res => {
          this.amtDiffRecordsResponse = res;
          this.amtDiffRecordsDataSource = new MatTableDataSource(res.data);
        });
        this.cliService.queryCpsDiffRecords(this.query).subscribe( res => {
          this.cpsDiffRecordsResponse = res;
          this.cpsDiffRecordsDataSource = new MatTableDataSource(res.data);
        });
        this.cliService.queryParkingSettlementRecords(this.query).subscribe( res => {
          this.parkingSettlementRecordsResponse = res;

          this.parkingSettlementRecordsDataSource = new MatTableDataSource(res.data);
        });
      }

    onNoClick(): void {
      this.dialogRef.close();
    }

  onCloseDailog(): void {
    this.dialogRef.close();
  }
  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  save() {
    this.savedResponse = new ApiResponse();
  }

  getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
  }
}

class Query {
  query_date: string;
  paid_type: string;
  file_name: string;
}


