import { Component, OnInit, Input } from '@angular/core';
import { PmsDiffRecords, RecordsAfterHumenClose,AmtDiffRecords,CpsDiffRecords,ParkingSettlementRecords } from '../../../shared/accounting-report';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-accounting-report-detail',
  templateUrl: './accounting-report-detail.component.html',
  styleUrls: ['./accounting-report-detail.component.css']
})
export class AccountingReportDetailComponent implements OnInit {

  @Input() pmsDiffRecordsDataSource: MatTableDataSource<PmsDiffRecords> = new MatTableDataSource<PmsDiffRecords>();
  @Input() recordsAfterHumenCloseDataSource: MatTableDataSource<RecordsAfterHumenClose> = new MatTableDataSource<RecordsAfterHumenClose>();
  @Input() amtDiffRecordsDataSource: MatTableDataSource<AmtDiffRecords> = new MatTableDataSource<AmtDiffRecords>();
  @Input() cpsDiffRecordsDataSource: MatTableDataSource<CpsDiffRecords> = new MatTableDataSource<CpsDiffRecords>();
  @Input() parkingSettlementRecordsDataSource: MatTableDataSource<ParkingSettlementRecords> = new MatTableDataSource<ParkingSettlementRecords>();

  displayedColumns = ['id', 'card_no', 'paid_time', 'trx_amt'];
  displayedColumns2 = ['id', 'card_no', 'paid_time', 'trx_amt', 'humen_close_amt', 'paid_type'];
  displayedColumns3 = ['card_no', 'paid_time', 'id', 'pms_trx_amt', 'cps_trx_file', 'cps_trx_amt', 'div_amt'];
  displayedColumns4 = ['cps_trx_file', 'card_no', 'cps_trx_amt', 'paid_time'];
  displayedColumns5 = ['id', 'card_no', 'paid_type', 'settlement_type', 'paid_time', 'pms_trx_amt'];
  constructor() {
  }

  ngOnInit() {
  }


}
