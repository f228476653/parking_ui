import { Component, OnInit } from '@angular/core';
import { PageQuery, DatetimeCompound, RSPMSInstantTransactionQuery } from '../view-models';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { RSPMSInstant } from '../../shared';

@Component({
  selector: 'app-instant-transaction-report-rspms',
  templateUrl: './instant-transaction-report-rspms.component.html',
  styleUrls: ['./instant-transaction-report-rspms.component.css']
})
export class InstantTransactionReportRspmsComponent implements OnInit {

  dataSource: MatTableDataSource<RSPMSInstant> = new MatTableDataSource<RSPMSInstant>();
  // pagination args
  length = 100;
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [10, 20 , 100];
  // table args
  displayedColumns = ['customer_code', 'garage_code', 'car_no', 'enter_time', 'exit_time',
      'parking_type', 'fee', 'real_fee', 'paid_type'];
  // search bar args
  paid_type = ['未付款', '一卡通', '停車大聲公'];
  parking_type = ['一般', '身障本市', '身障外市'];
  enter_time: string;
  exit_time: string;
  query = new RSPMSInstantTransactionQuery();
  exit_datetime_begin: DatetimeCompound = new DatetimeCompound();
  exit_datetime_end: DatetimeCompound = new DatetimeCompound();
  enter_datetime_begin: DatetimeCompound = new DatetimeCompound();
  enter_datetime_end: DatetimeCompound = new DatetimeCompound();
  constructor() { }
  ngOnInit() {
    // this.getGarageGroup();
  }

  onSearch () {
    console.log(this.query);
  }

  pageEvent(e) {
    console.log(e);
  }

}
