import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort, PageEvent } from '@angular/material';
import { ApiResponse, DateEnum, Instant, DateTest} from '../../shared/index';
import { Router } from '@angular/router';
import { InstantService } from '../../services/instant.service';
import { UserService } from '../../services/user.service';
import { Garage } from '../../shared/garage';
import { GarageService } from '../../services/garage.service';
import { GarageGroupService } from '../../services/garage-group.service';
import { Parking } from '../../shared/parking';
import { GarageGroup, User , VehicleType , DeviceType} from '../../shared';
import { DatetimeCompound, PageQuery } from '../view-models';
import { ExcelServiceService } from '../../services/excel-service.service';
import { validateConfig } from '../../../../node_modules/@angular/router/src/config';


@Component({
  selector: 'app-instant-transaction-report-pmsplus',
  templateUrl: './instant-transaction-report-pmsplus.component.html',
  styleUrls: ['./instant-transaction-report-pmsplus.component.css'],
})

export class InstantTransactionReportPmsplusComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  query: PageQuery = new PageQuery();
  data: ApiResponse<Instant[]>;
  parkinglist: MatTableDataSource<Parking> = new MatTableDataSource<Parking>();
  displayedColumns = ['parking_id', 'garage_name', 'card_type', 'card_number', 'vehicle_type',
  'vehicle_identification_number', 'pv', 'pv_out', 'enter_time', 'exit_time', 'pay_datetime' ,
  'duration_time', 'real_fee',  'einvoice'];
  isKeepExpended = 0;

  dataSource: MatTableDataSource<Instant> = new MatTableDataSource<Instant>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  instantResponse: ApiResponse<Instant[]>;
  accountsResponse: ApiResponse<User[]> = new ApiResponse<User[]>();
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  vehicleType = VehicleType;
  deviceType = DeviceType;
  excel_data: any[];

  // pagination argu
  length = 0;
  pageSize = 10;
  pageIndex = 1;
  pageEvent: PageEvent;
  time_error;
  loading = false;

  enter_time: string;
  exit_time: string;
  disability_mode: string;

  exit_datetime_begin: DatetimeCompound = new DatetimeCompound();
  exit_datetime_end: DatetimeCompound = new DatetimeCompound();
  enter_datetime_begin: DatetimeCompound = new DatetimeCompound();
  enter_datetime_end: DatetimeCompound = new DatetimeCompound();


  csvOptions = {};
  constructor(public userService: UserService, public garageGroupService: GarageGroupService, private instantService: InstantService,
    public garageService: GarageService, public excelService: ExcelServiceService) { }

  ngOnInit() {
    // this.getGarageGroup();
    this.query['device_type'] = 1 ;
    console.log(this.query);
  }
  onSearch() {
    this.loading = true;
    this.time_error = '';
    this.getQueryObject();
    this.queryInstant();
  }
  getQueryObject() {
    console.log(this.enter_datetime_begin.date) ;
    if ( this.enter_datetime_begin.date !== undefined) {
      this.enter_datetime_begin.time = this.validateTimeFormat(this.enter_datetime_begin);
      this.query.enter_time_begin = this.combineDateFormat(this.enter_datetime_begin.date , this.enter_datetime_begin.time );
    }
    if ( this.enter_datetime_end.date !== undefined) {
      this.enter_datetime_end.time = this.validateTimeFormat(this.enter_datetime_end);
      this.query.enter_time_end = this.combineDateFormat(this.enter_datetime_end.date , this.enter_datetime_end.time );
    }
    if ( this.exit_datetime_begin.date !== undefined) {
      this.exit_datetime_begin.time = this.validateTimeFormat(this.exit_datetime_begin);
      this.query.exit_time_begin = this.combineDateFormat(this.exit_datetime_begin.date , this.exit_datetime_begin.time );
    }
    if ( this.exit_datetime_end.date !== undefined) {
      this.exit_datetime_end.time = this.validateTimeFormat(this.exit_datetime_end);
      this.query.exit_time_end = this.combineDateFormat(this.exit_datetime_end.date , this.exit_datetime_end.time );
    }
  }
  validateTimeFormat(datetime: DatetimeCompound) {
    const rex = new RegExp(/^([0-24]\d):([0-59]\d):([0-59]\d)$/);
    const hour = String(datetime.hour).length < 2 ? '0' + String(datetime.hour) : String(datetime.hour);
    const min = String(datetime.min).length < 2  ? '0' + String(datetime.min) : String(datetime.min);
    const sec = String(datetime.sec).length < 2  ? '0' + String(datetime.sec) : String(datetime.sec);
    if (rex.test(hour + ':' + min + ':' + sec)) {
      return  hour + ':' + min + ':' + sec ;
    } else {
      this.time_error = '時間格式錯誤';
      return;
    }
  }

  combineDateFormat(date: Date, time) {
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1);
    const day = date.getDate()  < 10 ? '0' + String(date.getDate()) : String(date.getDate()) ;
    const dateformat = year + '-' + month + '-' + day + ' ' + time ;
    return dateformat;
  }



  // query_parking(e) {
  //   const check_has_value = {'paid_time_begin': this.paid_time_begin, 'paid_time_end': this.paid_time_end,
  //   'enter_time_begin': this.enter_time_begin, 'enter_time_end': this.enter_time_end};
  //   this.datetime_handler(check_has_value);
  //   this.pageSize = e.pageSize;
  //   this.pageIndex = e.pageIndex;
  //   const query_data = {'query': this.query,
  //   'pagination': {'page_size': this.pageSize, 'page_index': this.pageIndex}};
  //   this.garageExitService.query_transaction(query_data).subscribe( res => {
  //       this.length = res.data['page_count'];
  //       this.parkinglist.data = res.data['result'];
  //   });
  // }


  getUsersByGarageIdXorCustomerId() {
    this.userService.getUsersByGarageIdXorCustomerId(this.query.garage_id).subscribe( res => {
      this.accountsResponse = res;
    });
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

  clearTableFilter() {
    this.query = new PageQuery();
    this.exit_datetime_begin = new DatetimeCompound();
    this.exit_datetime_end = new DatetimeCompound();
    this.enter_datetime_begin = new DatetimeCompound();
    this.enter_datetime_end = new DatetimeCompound();
  }

  queryInstant() {
    this.instantResponse = new ApiResponse();
    this.dataSource.data = [];
    this.instantService.queryPV3Instant(this.query).subscribe( res => {
       if (!res.has_error) {
        this.instantResponse = res;
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource);
        this.loading = false;
       }
     }, err => {
       this.instantResponse.has_error = true;
       this.instantResponse.message = err.message;
     });
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

  csvExport() {
  this.excel_data = [];
    let object = {};
    this.instantResponse.data.forEach( x => {
      console.log(x);
      console.log(typeof x);
      object = {
        '流水號': x.parking_id,
        '場站名稱': x.garage_name,
        '交易票種': x['paid_type'],
        '卡號': x.card_id16,
        '車種': x['vehicle_type'],
        '車牌': x.vehicle_identification_number	,
        '進場PV': x.pv,
        '出場PV': x.pv_out,
        '進場時間': x.enter_time,
        '出場時間': x.exit_time	,
        '付費時間': x.paid_time,
        '停留時間': x['duration'],
        '實付費用': x.real_fee ,
        '發票號碼': x['einvoice']
      };
      this.excel_data.push(object);
    });
    this.excelService.exportAsExcelFile(this.excel_data, 'instant_transaction');
  }
}
