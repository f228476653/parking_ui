import { GarageGroupService } from './../../services/garage-group.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { InstantService } from '../../services/instant.service';
import { ApiResponse, Garage, User, Instant, GarageGroup, GarageExit, DateEnum, SessionStorage, VehicleType } from '../../shared';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { UserService } from '../../services/user.service';
import { PageQuery, DateQuery } from '../view-models';
import { GarageExitService } from '../../services/garage-exit.service';
import { GarageService } from '../../services';
import { ExcelServiceService } from '../../services/excel-service.service';
@Component({
  selector: 'app-instant-transaction-report-pad',
  templateUrl: './instant-transaction-report-pad.component.html',
  styleUrls: ['./instant-transaction-report-pad.component.css']
})
export class InstantTransactionReportPadComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  loading = false;
  isEmptyData = false;
  query: PageQuery = new PageQuery();
  data: ApiResponse<Instant[]>;
  dataSource: MatTableDataSource<Instant> = new MatTableDataSource<Instant>();
  displayedColumns = ['parking_id', 'garage_name', 'vehicle_identification_number'
  , 'enter_time', 'exit_time', 'diff_hours', 'vehicle_type', 'receivable', 'real_fee' , 'exit_type_name'
  , 'exit_type_config_detail_remarks', 'user_name', 'invoice_number', 'tax_id_number_buyer', 'record_status'];
  excel_data: any[];
  instantResponse: ApiResponse<Instant[]>;
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  accountsResponse: ApiResponse<User[]> = new ApiResponse<User[]>();
  vehicleType = VehicleType;
  enter_time: string;
  exit_time: string;

  groupname: string;
  enter_start_config = { hour: 0, minute: 0, meriden: 'PM', format: 24 };
  enter_end_config = { hour: 23, minute: 59, meriden: 'PM', format: 24 };
  exit_start_config = { hour: 0, minute: 0, meriden: 'PM', format: 24 };
  exit_end_config = { hour: 23, minute: 59, meriden: 'PM', format: 24 };

  enter_date_begin: DateQuery = new DateQuery();
  enter_date_end: DateQuery = new DateQuery();
  exit_date_begin: DateQuery = new DateQuery();
  exit_date_end: DateQuery = new DateQuery();
  isKeepExpended = 1;
  page_query_has_error = false;
  page_query_error_message = '時間格式為hh:mm,例如19:01';
  constructor(public userService: UserService, public garageExitService: GarageExitService
    , public garageGroupService: GarageGroupService, private instantService: InstantService
    , public garageService: GarageService, public sessionStorage: SessionStorage
    , public excelService: ExcelServiceService) { }

  ngOnInit() {
    // this.getGarageGroup();
    this.initTime();
    this.query['device_type'] = 3 ;
  }

  getUsersByGarageIdXorCustomerId() {
    this.userService.getUsersByGarageIdXorCustomerId(this.query.garage_id).subscribe( res => {
      this.accountsResponse = res;
    });
  }




  onSearch() {
    this.getQueryObject();
    this.loading = true;
    if (this.checkQueryTimeFormat()) {
      this.queryInstant();
    }
  }

  initTime() {
    this.enter_date_begin.time = '00:00';
    this.enter_date_end.time = '23:59';
    this.exit_date_begin.time = '00:00';
    this.exit_date_end.time = '23:59';
  }
  checkTimeFormat(x) {
    const expr = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    console.log(expr.test(x));
    return expr.test(x);
  }
  checkQueryTimeFormat() {
    this.page_query_has_error = false;
    if (this.enter_date_begin.date !== undefined ) {
      if (this.enter_date_begin.time != null && this.enter_date_begin.time !== '') {
        if (!this.checkTimeFormat(this.enter_date_begin.time)) {
          this.page_query_has_error = true;
          return false;
        }
      }
    }
    if (this.enter_date_end.date !== undefined ) {
      if (this.enter_date_end.time != null && this.enter_date_end.time !== '') {
        if (!this.checkTimeFormat(this.enter_date_end.time)) {
          this.page_query_has_error = true;
          return false;
        }
      }
    }
    if (this.exit_date_begin.date !== undefined ) {
      if (this.exit_date_begin.time != null && this.exit_date_begin.time !== '') {
        if (!this.checkTimeFormat(this.exit_date_begin.time)) {
          this.page_query_has_error = true;
          return false;
        }
      }
    }
    if (this.exit_date_end.date !== undefined ) {
      if (this.exit_date_end.time != null && this.exit_date_end.time !== '') {
        if (!this.checkTimeFormat(this.exit_date_end.time)) {
          this.page_query_has_error = true;
          return false;
        }
      }
    }
    return true;
  }
  getQueryObject() {
    // timepicker must be string
    // remove '0' ex:08:05 >8:5
  if (this.enter_date_begin.date !== undefined ) {
    if (this.enter_date_begin.time != null && this.enter_date_begin.time !== '') {
      // tslint:disable-next-line:max-line-length
      const start_hour = this.enter_date_begin.time.split(':')[0].length < 2 ? '0' + this.enter_date_begin.time.split(':')[0] : this.enter_date_begin.time.split(':')[0] ;
      // tslint:disable-next-line:max-line-length
      const start_min = this.enter_date_begin.time.split(':')[1].length < 2 ? '0' + this.enter_date_begin.time.split(':')[1] : this.enter_date_begin.time.split(':')[1] ;
      // tslint:disable-next-line:max-line-length
      this.query.enter_time_begin = this.enter_date_begin.date.toLocaleString('zh-TW').replace(new RegExp('/', 'g'), '-').split(' ')[0] + ' ' + start_hour + ':' + start_min + ':00';
    }
  }
  if (this.enter_date_end.date !== undefined ) {
    if (this.enter_date_end.time != null) {
      // tslint:disable-next-line:max-line-length
      const end_hour = this.enter_date_end.time.split(':')[0].length < 2 ? '0' + this.enter_date_end.time.split(':')[0] : this.enter_date_end.time.split(':')[0] ;
      // tslint:disable-next-line:max-line-length
      const end_min = this.enter_date_end.time.split(':')[1].length < 2 ? '0' + this.enter_date_end.time.split(':')[1] : this.enter_date_end.time.split(':')[1] ;
      // tslint:disable-next-line:max-line-length
      this.query.enter_time_end = this.enter_date_end.date.toLocaleString('zh-TW').replace(new RegExp('/', 'g'), '-').split(' ')[0] + ' ' + end_hour + ':' + end_min + ':00';
    }
  }
    if (this.exit_date_begin.date !== undefined ) {
      if (this.exit_date_begin.time != null) {
        // tslint:disable-next-line:max-line-length
        const start_hour = this.exit_date_begin.time.split(':')[0].length < 2 ? '0' + this.exit_date_begin.time.split(':')[0] : this.exit_date_begin.time.split(':')[0] ;
        // tslint:disable-next-line:max-line-length
        const start_min = this.exit_date_begin.time.split(':')[1].length < 2 ? '0' + this.exit_date_begin.time.split(':')[1] : this.exit_date_begin.time.split(':')[1] ;
        // tslint:disable-next-line:max-line-length
        this.query.exit_time_begin = this.exit_date_begin.date.toLocaleString('zh-TW').split(' ')[0] + ' ' + start_hour + ':' + start_min + ':00';
      }
    }
    if (this.exit_date_end.date !== undefined  ) {
      if (this.exit_date_end.time != null) {
        // tslint:disable-next-line:max-line-length
        const end_hour = this.exit_date_end.time.split(':')[0].length < 2 ? '0' + this.exit_date_end.time.split(':')[0] : this.exit_date_end.time.split(':')[0] ;
        // tslint:disable-next-line:max-line-length
        const end_min = this.exit_date_end.time.split(':')[1].length < 2 ? '0' + this.exit_date_end.time.split(':')[1] : this.exit_date_end.time.split(':')[1] ;
        this.query.exit_time_end = this.exit_date_end.date.toLocaleString('zh-TW').split(' ')[0] + ' ' + end_hour + ':' + end_min + ':00';
      }
    }
  }

  queryInstant() {
    this.instantResponse = new ApiResponse();
    this.dataSource.data = [];
    console.log(this.query);
     this.instantService.queryPadInstant(this.query).subscribe( res => {
       if (!res.has_error) {
         res.data.forEach( x => {
           if (!x.exit_time) {
              x.exit_time = '';
           }
           if (!x.tax_id_number) {
              x.tax_id_number = '';
           }
           if (!x.vehicle_type) {
             x.vehicle_type = 0;
           }

          x.vehicle_type = this.getVehicleType(x.vehicle_type);
           if (!x.exit_type_name) {
             x.exit_type_name = '';
           }
           if (!x.invoice_number) {
             x.invoice_number = '';
           }
           if (!x.tax_id_number_buyer) {
             x.tax_id_number_buyer = '';
           }
           if (!x.exit_time) {
             x.exit_time = '未出場';
           }
           if (!x.diff_hours) {
            x.exit_time = '未出場';
          }
          if (!x.exit_type_config_detail_remarks) {
            x.exit_type_config_detail_remarks = '';
          }
          if (!x.user_name) {
            x.user_name = '';
          }

          if (x.record_status.toString() === '1' ) {
            x.record_status = '正常';
          } else if (x.record_status.toString() === '0'.toString()) {
            x.record_status = '作廢';
          } else if (x.record_status.toString() === '2'.toString()) {
            x.record_status = '補開';
          }

         });
         console.log(res.data);
          this.instantResponse = res;
          this.dataSource.data = res.data;
          this.dataSource.paginator = this.paginator;
          this.loading = false;
       }
     }, err => {
       this.instantResponse.has_error = true;
       this.instantResponse.message = err.message;
     });
  }

  clearTableFilter() {
    this.query = new PageQuery();
    this.enter_date_begin = new DateQuery();
    this.enter_date_end = new DateQuery();
    this.exit_date_begin = new DateQuery();
    this.exit_date_end = new DateQuery();
    this.initTime();
  }

  getGarageName(id: string) {

    this.garageResponse.data.forEach( x => {
      if (id === x.garage_code.toString()) {
        console.log(x.garage_name);
        return x.garage_name;
      }
    });
    return '';
  }

  csvExport() {
    this.excel_data = [];
    let object = {};
    this.instantResponse.data.forEach( x => {
      object = {
        '流水號': x.parking_id,
        '場站名稱': x.garage_name,
        '車牌': x.vehicle_identification_number	,
        '進場時間': x.enter_time,
        '出場時間': x.exit_time	,
        '停車時間': x.diff_hours,
        '車種' : x.vehicle_type,
        '應收金額': x.receivable ,
        '實付金額': x.real_fee,
        '出場理由': x.exit_type_name,
        '出場理由備註': x.exit_type_config_detail_remarks,
        '管理員': x.user_name,
        '發票號碼': x.invoice_number ,
        '客戶統編': x.tax_id_number_buyer,
        '異常紀錄': x.record_status
      };
      this.excel_data.push(object);
    });
    this.excelService.exportAsExcelFile(this.excel_data, 'pad_instant_transaction');
  }

  keepExpended() {
    this.isKeepExpended = 1;
  }

  getVehicleType(vehicle_type: string|number) {
    let v = '';
    this.vehicleType.forEach( w => {
      if (w.value.toString() === vehicle_type.toString()) {
        v = w.name;
      }
    });
    return v;
  }
}
