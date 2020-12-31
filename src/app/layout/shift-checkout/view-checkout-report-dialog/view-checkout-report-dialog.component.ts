import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ShiftCheckout } from '../../../shared/shift-checkout';
import { UserService } from '../../../services/user.service';
import { PageData, PageMode } from '../../../shared/page-mode';
import { CliService } from '../../../services/cli.service';
import { PmsDiffRecords, DetailQuery, RecordsAfterHumenClose, AmtDiffRecords, CpsDiffRecords,
  ParkingSettlementRecords } from '../../../shared/accounting-report';
import { ApiResponse, SessionStorage } from '../../../shared/index';

@Component({
  selector: 'app-view-checkout-report-dialog',
  templateUrl: './view-checkout-report-dialog.component.html',
  styleUrls: ['./view-checkout-report-dialog.component.css']
})
export class ViewCheckoutReportDialogComponent implements OnInit {
  private report_data: ShiftCheckout;
  shiftJson;
  constructor(
    public dialogRef: MatDialogRef<ViewCheckoutReportDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pageData: PageData<ShiftCheckout, PageMode>) {
    }

  ngOnInit() {
    this.report_data = this.pageData.data;
    // i dont know why it doesnt work!!
    const assign = Object.assign(new ShiftCheckout(), this.report_data);
    this.shiftJson = assign.dataInJson();
  }
}
