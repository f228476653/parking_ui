import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponse, DateEnum, Instant } from '../../shared/index';
import { Router } from '@angular/router';
import { InstantService } from '../../services/instant.service';
import { CliService } from '../../services/cli.service';
import { Garage } from '../../shared/garage';
import { GarageService } from '../../services/garage.service';
import { GarageExitService } from '../../services/garage-exit.service';
import { GarageExit } from '../../shared/garage-exit';
import { NgSwitch } from '@angular/common';
import { DateQuery, PageQuery } from '../view-models';


@Component({
  selector: 'app-instant-transaction-report',
  templateUrl: './instant-transaction-report.component.html',
  styleUrls: ['./instant-transaction-report.component.css'],
  animations: [routerTransition()]
})
export class InstantTransactionReportComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isEmptyData = false;
  query: PageQuery = new PageQuery();
  data: ApiResponse<Instant[]>;
  dataSource: MatTableDataSource<Instant> = new MatTableDataSource<Instant>();
  displayedColumns = ['random_num', 'garage_name', 'card_type', 'card_num', 'car_type'
  ,  'entry_time', 'exit_time', 'paid_time' , 'parking_time', 'paid_money',  'invoice_num'];

  instantResponse: ApiResponse<Instant[]>;
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageList: MatTableDataSource<GarageExit> = new MatTableDataSource<GarageExit>();
  isKeepExpended = 1;

  enter_time: string;
  exit_time: string;
  in_or_out: string;
  disability_mode: string;
  card_id: string;
  groupname: string;

  enter_date_begin: DateQuery = new DateQuery();
  enter_date_end: DateQuery = new DateQuery();
  paid_date_begin: DateQuery = new DateQuery();
  paid_date_end: DateQuery = new DateQuery();

  has_error_enter_begin_hour: boolean ;
  has_error_enter_begin_min: boolean;
  has_error_enter_end_hour: boolean;
  has_error_enter_end_min: boolean;
  has_error_paid_begin_hour: boolean;
  has_error_paid_begin_min: boolean;
  has_error_paid_end_hour: boolean;
  has_error_paid_end_min: boolean;

  constructor(public garageExitService: GarageExitService, public router: Router,
    private instantService: InstantService, public garageService: GarageService) {
  }

  ngOnInit() {
    this.getGarage();
    this.showData();
  }
  getGarage() {
    this.garageService.getGarages().subscribe( res => {
      this.garageResponse = res;
    });
  }

  getGarageGroup(e) {
    this.garageExitService.getGarageGroupList(e.value).subscribe( res => {
      this.garageList.data = res.data;
    });
  }

  onSearch() {
    this.getQueryObject();
    this.queryInstant();
  }

  getQueryObject() {
    // if (this.enter_date_begin.date !== undefined ) {
    //     this.enter_date_begin.hour  = this.enter_date_begin.hour === undefined ? '00' : this.enter_date_begin.hour;
    //     this.enter_date_begin.min  = this.enter_date_begin.min === undefined ? '00' : this.enter_date_begin.min;
    //     this.query.enter_time_begin = this.enter_date_begin.date.toLocaleString('zh-TW').split(' ')[0] + ' '
    //                                  + this.enter_date_begin.hour + ':'
    //                                  + this.enter_date_begin.min + ':'
    //                                  + this.enter_date_begin.second;
    //     // this.enter_date_begin.date.setHours(this.enter_date_begin.hour);
    //     // this.enter_date_begin.date.setMinutes(this.enter_date_begin.min);
    //     // this.query.enter_time_begin = this.enter_date_begin.date.toLocaleString('zh-TW');
    // }
    // if (this.enter_date_end.date !== undefined ) {
    //   console.log(this.enter_date_end.hour);
    //     this.enter_date_end.hour  = this.enter_date_end.hour === undefined ? '00' : this.enter_date_end.hour;
    //     this.enter_date_end.min  = this.enter_date_end.min === undefined ? '00' : this.enter_date_end.min;
    //     // console.log(this.enter_date_end.hour);
    //     // this.enter_date_end.date.setHours(this.enter_date_end.hour);
    //     // this.enter_date_end.date.setMinutes(this.enter_date_end.min);
    //     // this.query.enter_time_end = this.enter_date_end.date.toLocaleString('zh-TW');
    //     this.query.enter_time_end = this.enter_date_end.date.toLocaleString('zh-TW').split(' ')[0] + ' ' +
    //                                  this.enter_date_end.hour + ':' +
    //                                  this.enter_date_end.min + ':' +
    //                                  this.enter_date_end.second;
    // }

    // if (this.paid_date_begin.date !== undefined ) {
    //     this.paid_date_begin.hour  = this.paid_date_begin.hour === undefined ? '00' : this.paid_date_begin.hour;
    //     this.paid_date_begin.min  = this.paid_date_begin.min === undefined ? '00' : this.paid_date_begin.min;
    //     this.query.paid_time_begin = this.paid_date_begin.date.toLocaleString('zh-TW').split(' ')[0] + ' '
    //                                + this.paid_date_begin.hour + ':'
    //                                + this.paid_date_begin.min + ':'
    //                                + this.paid_date_begin.second;

    //     // this.paid_date_begin.date.setHours(this.paid_date_begin.hour);
    //     // this.paid_date_begin.date.setMinutes(this.paid_date_begin.min);
    //     // this.query.paid_time_begin = this.paid_date_begin.date.toLocaleString('zh-TW');
    // }
    // if (this.paid_date_end.date !== undefined ) {
    //     this.paid_date_end.hour  = this.paid_date_end.hour === undefined ? '00' : this.paid_date_end.hour;
    //     this.paid_date_end.min  = this.paid_date_end.min === undefined ? '00' : this.paid_date_end.min;
    //     this.query.paid_time_end = this.paid_date_end.date.toLocaleString('zh-TW').split(' ')[0]  + ' '
    //                                + this.paid_date_end.hour + ':'
    //                                + this.paid_date_end.min + ':'
    //                                + this.paid_date_end.second;

    //     // this.paid_date_end.date.setHours(this.paid_date_end.hour);
    //     // this.paid_date_end.date.setMinutes(this.paid_date_end.min);
    //     // this.query.paid_time_end = this.paid_date_end.date.toLocaleString('zh-TW');
    // }
  }

  showData() {
    this.garageExitService.getGarageAllSetting().subscribe( res => {
      this.groupname = res.data['groupname'];
    });
  }

  queryInstant() {
    this.instantResponse = new ApiResponse();
     this.instantService.queryInstant(this.query).subscribe(res => { this.instantResponse = res;
       if (!this.instantResponse.has_error) {
          this.dataSource.data = res.data;
          this.dataSource.paginator = this.paginator;
       }
     }, err => {
       this.instantResponse.has_error = true;
       this.instantResponse.message = err.message;
     });
  }

  /**
   *
   * @param type  time type to validate, example: 'hour','min'
   * @param field field name to validate, example: 'enter_date_end_hour'
   */
  check_time_format(type , field: String) {
    // if (type === DateEnum.hour ) {
    //   if (field === 'enter_date_begin_hour' && (this.enter_date_begin.hour > 23 || this.enter_date_begin.hour < 0)) {
    //      this.enter_date_begin.hour = '00';
    //   }
    //   if (field === 'enter_date_end_hour' && (this.enter_date_end.hour > 23 || this.enter_date_end.hour < 0)) {
    //     this.enter_date_end.hour = '00';
    //   }
    //   if (field === 'paid_date_begin_hour' && (this.paid_date_begin.hour > 23 || this.paid_date_begin.hour < 0)) {
    //      this.paid_date_begin.hour = '00';
    //   }
    //   if (field === 'paid_date_end_hour' && (this.paid_date_end.hour > 23 || this.paid_date_end.hour < 0)) {
    //     this.paid_date_end.hour = '00';
    //   }
    // }
    // if (type === DateEnum.min ) {
    //   if (field === 'enter_date_begin_min' && (this.enter_date_begin.min > 59 || this.enter_date_begin.min < 0)) {
    //     this.enter_date_begin.min = '00';
    //   }
    //   if (field === 'enter_date_end_min' && (this.enter_date_end.min > 59 || this.enter_date_end.min < 0)) {
    //      this.enter_date_end.min = '00';
    //   }
    //   if (field === 'paid_date_begin_min' && (this.paid_date_begin.min > 59 || this.paid_date_begin.min < 0)) {
    //     this.paid_date_begin.min = '00';
    //   }
    //   if (field === 'paid_date_end_min' && (this.paid_date_end.min > 59 || this.paid_date_end.min < 0)) {
    //     this.paid_date_end.min = '00';
    //   }
    // }
  }

  clearTableFilter() {
    this.query = new PageQuery();
  }
}

