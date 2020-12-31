import { Component, OnInit, Output, EventEmitter, LOCALE_ID, Input } from '@angular/core';
import { GarageGroupService } from './../../../services/garage-group.service';
import { ApiResponse, Garage, User, GarageGroup, SessionStorage , Customer } from '../../../shared';
import { ReportQuery } from '../../../shared/index';
import { UserService } from '../../../services/user.service';
import { GarageService , CustomerService } from '../../../services';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-report-query',
  templateUrl: './report-query.component.html',
  styleUrls: ['./report-query.component.css']
})
export class ReportQueryComponent implements OnInit {
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  accountsResponse: ApiResponse<User[]> = new ApiResponse<User[]>();
  query: ReportQuery = new ReportQuery();
  isSuperUser = false;
  page_query_has_error = false;
  customerResponse = new ApiResponse<Customer[]>();
  isKeepExpended = 1;
  datePipe: DatePipe;
  garage;
  customer;
  card_type;
  @Input() hiddenCardType = false;
  @Output() onSearch = new EventEmitter<ReportQuery>() ;


  paid_type = [
    {value: 'all', viewValue: '全部'},
    {value: '02', viewValue: '愛金卡'},
    {value: '03', viewValue: '一卡通'},
    {value: '05', viewValue: '有錢卡'},
    {value: '99', viewValue: '人工結帳'}
  ];

  constructor(public userService: UserService , public customerService: CustomerService , public garageGroupService: GarageGroupService
    , public garageService: GarageService, public sessionStorage: SessionStorage) {
     }

  ngOnInit() {
    this.checkSuperUser();
    this.getGarageGroup();
    this.getCustomers();
  }

  getGarageGroup() {
    this.garageGroupService.getGarageGroupsByAccountId().subscribe( res => {
      // console.log(res);
      this.garageGroupResponse = res;
    });
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe( res => {
      this.customerResponse = res;
      if (!this.isSuperUser) {
      this.query.customer_id = res.data[0]['customer_id'];
      this.query.company_name = res.data[0]['company_name'];
      }
    });
  }

  checkSuperUser() {
    this.isSuperUser = this.sessionStorage.getIsSuperUser();
    if (this.isSuperUser !== true) {
      this.query.customer_id = this.sessionStorage.getCustomerId();
      // console.log(this.query.customer_id);
    }
  }

  onGarageGroupChanged(e) {
    this.garageService.getGaragesByGarageGroupId(e.value).subscribe( x => {
      this.garageResponse = x;
      // console.log(x);
    });
  }

  onCustomerChange(e) {
  }

  getGarage(e) {
    this.garageService.getGarages().subscribe( res => {
      this.garageResponse = res;
    });
  }

  getUsersByGarageIdXorCustomerId() {
    this.userService.getUsersByGarageIdXorCustomerId(this.query.garage_id).subscribe( res => {
      this.accountsResponse = res;
    });
  }

  clearTableFilter() {
    this.query = new ReportQuery();
  }

  search() {
    // if (this.garage.garage_code && this.query.paid_type && this.query.query_date && this.customer.customer_id) {
      // console.log('送出;');
      // console.log(this.card_type);
      if (this.card_type !== undefined) {
        this.query.paid_type = this.card_type.value;
        this.query.paid_type_name = this.card_type.viewValue;
      }
      if (this.isSuperUser) {
        this.query.customer_id = this.customer.customer_id;
        this.query.company_name = this.customer.company_name;
      }
      this.query.garage_code = this.garage.garage_code;
      this.query.garage_name = this.garage.garage_name;
      this.onSearch.emit(this.query);
      // console.log(this.query);
    // } else {
    //   console.log('條件不符');
    //   console.log(this.customer.customer_id);
    //   console.log(this.garage.garage_code);
    //   console.log(this.query.paid_type);
    //   console.log(this.query.query_date);
    // }
  }
  
  keepExpended() {
    this.isKeepExpended = 1;
  }

}
