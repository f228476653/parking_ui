import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { UserService } from '../../services/user.service';
import { ManagementComponentInterface } from '../management-base';
import { CliService } from '../../services/cli.service';
import { AccountingReport, DetailQuery } from '../../shared/accounting-report';
import { Garage } from '../../shared/garage';
import { GarageService } from '../../services/garage.service';
import { AccountingReportDetailDialogComponent } from './accounting-report-detail-dialog/accounting-report-detail-dialog.component';
import { PageData, PageMode } from '../../shared/page-mode';
import { ApiResponse } from '../../shared/index';
import { Query } from '../view-models';
import { ExcelServiceService } from '../../services/excel-service.service';
@Component({
  selector: 'app-accounting-report',
  templateUrl: './accounting-report.component.html',
  styleUrls: ['./accounting-report.component.css'],
  animations: [routerTransition()]
})
export class AccountingReportComponent implements ManagementComponentInterface<AccountingReport>, OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  accounting_report_date;
  excel_data: any[];
  file_name_type = ['', '00220%', '', 'DPTI%' ];
  isEmptyData = false;
  txtTableFilter: string;
  query: Query = new Query();
  selectedGarage: Garage;
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  data: ApiResponse<AccountingReport[]>;
  dataSource: MatTableDataSource<AccountingReport> = new MatTableDataSource<AccountingReport>();
  displayedColumns = ['garage_code', 'garage_name', 'format_date', 'pms_cnt', 'pms_fee', 'cps_cnt', 'cps_fee'
  , 'cps_cleared_fee', 'cps_abnomal_cleared_fee', 'cps_updated_fee', 'pms_cps_data_diff', 'pms_cps_diff', 'settlement_diff', 'edit'
  ];

  constructor(public cliService: CliService, public garageService: GarageService
    , public editDialog: MatDialog, public excelService: ExcelServiceService) {  }

  ngOnInit() {
    this.refreshTable();
    this.garageService.getGarages().subscribe( res => {
      this.garageResponse = res;
    });
  }
  ngAfterViewInit() {
  }

  view(query_date: string, garage_code: string, paid_type: string) {
    const detailQuery = new DetailQuery();
    detailQuery.query_date = query_date;
    detailQuery.file_name = paid_type === '01' ? this.file_name_type[1] : this.file_name_type[3];
    detailQuery.garage_code = garage_code;
    detailQuery.paid_type = paid_type;
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);

    const dialogRef = this.editDialog.open(AccountingReportDetailDialogComponent, {
      width: '1000px',
      data: pageData
    });
  }

  search() {
    this.refreshTable();
  }
  getGarageName(garage_code: string) {
    this.garageResponse.data.forEach(obj => {
        if ( obj.garage_code === garage_code) {
          return obj.garage_name;
        }
    });
  }

  refreshTable() {
    this.cliService.queryAccountingReport(this.query).subscribe(response => {
      this.data = response;
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (this.data.data.length === 0) {
        this.isEmptyData = true;
      } else {
        this.isEmptyData = false;
      }
    });
  }

  edit(element: AccountingReport) {
    const dialogRef = this.editDialog.open(AccountingReportDetailDialogComponent, {
      width: '1000px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  clearTableFilter() {
    this.query = new Query();
    this.refreshTable();
  }

  csvExport() {
    this.excel_data = [];
    let object = {};
    this.data.data.forEach( x => {
      console.log(x);
      console.log(typeof x);
      object = {
        '場站代號': x.garage_code,
        '場站名稱': x['garage_name'],
        '交易日期': x.format_date	,
        '交易筆數': x.pms_cnt,
        '交易金額': x.pms_fee	,
        '上傳筆數': x.cps_cnt,
        '上傳金額' : x.cps_fee,
        '清分金額': x['cal_f_totalfee'] == null ? 0 : x['cal_f_totalfee'] ,
        '清分異常金額': x['cal_e_totalfee'] == null ? 0 : x['cal_e_totalfee'],
        '上傳未清分金額': x['cal_c_totalfee'] == null ? 0 : x['cal_c_totalfee'],
        '交易/上傳筆數差異': x['pms_cps_data_diff'] == null ? 0 : x['pms_cps_data_diff'],
        '交易/上傳金額差異': x['pms_cps_diff'] == null ? 0 : x['pms_cps_diff'],
        '清分筆數差異': x['settlement_diff'] == null ? 0 : x['settlement_diff']
      };
      this.excel_data.push(object);
    });
    this.excelService.exportAsExcelFile(this.excel_data, 'pad_instant_transaction');
  }

}

