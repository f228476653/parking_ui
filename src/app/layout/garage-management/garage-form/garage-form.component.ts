import { Customer } from '../../../shared/customer';
import { Garage } from '../../../shared/garage';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { ApiResponse, SessionStorage, CardType} from '../../../shared';
import { GarageService } from '../../../services/garage.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../../../services/customer.service';
import { GarageDevice } from '../../../shared/garage_device';
import { isGarageCodeExistValidator, characterLengthValidator } from '../../../shared/form-valiadtor';
import { DeviceService } from '../../../services/device.service';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { GarageTicketTransactionICash } from '../../../shared/garage-ticket-transaction-icash';
import { GarageTicketTransactionIPass } from '../../../shared/garage-ticket-transaction-ipass';
import { GarageTicketTransactionHappyCash } from '../../../shared/garage-ticket-transaction-happycash';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-garage-form',
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.css']
})
export class GarageFormComponent implements OnInit {
  @Input() savedResponse: ApiResponse<number>;
  @Input() data: Garage;
  @Output() onSave = new EventEmitter<boolean>();
  @Output() getGarageDevice = new EventEmitter<GarageDevice>();
  @Output() getGarageTicketTransactionICash = new EventEmitter<GarageTicketTransactionICash>();
  @Output() getGarageTicketTransactionIPass = new EventEmitter<GarageTicketTransactionIPass>();
  @Output() getGarageTicketTransactionHappyCash = new EventEmitter<GarageTicketTransactionHappyCash>();
  @Output() onClose = new EventEmitter<boolean>();
  // hidden garage_device field: stroe_no
  display = false;
  garage_device = new GarageDevice();
  garage_ticket_transaction_icash = new GarageTicketTransactionICash();
  garage_ticket_transaction_ipass = new GarageTicketTransactionIPass();
  garage_ticket_transaction_happycash = new GarageTicketTransactionHappyCash();
  start_config;
  end_config ;
  isSuperUser = false;
  customerResponse = new ApiResponse<Customer[]>();
  checkGarageCode: string;
  garageForm: FormGroup;
  cardType = new CardType();
  @Output() garageFormCheck = new EventEmitter<boolean>();
  constructor(
    private http: HttpClient, public garageService: GarageService, public deviceService: DeviceService,
    public customerService: CustomerService, public sessionStorage: SessionStorage, private _formBulider: FormBuilder,
    public ticketTransactionService: TicketTransactionService, 
  ) {
  }
  cities = [
    {value: '台北市', viewValue: '台北市'},
    {value: '基隆市', viewValue: '基隆市'},
    {value: '新北市', viewValue: '新北市'},
    {value: '連江縣', viewValue: '連江縣'},
    {value: '宜蘭縣', viewValue: '宜蘭縣'},
    {value: '新竹市', viewValue: '新竹市'},
    {value: '新竹縣', viewValue: '新竹縣'},
    {value: '桃園市', viewValue: '苗栗縣'},
    {value: '台中市', viewValue: '台中市'},
    {value: '彰化縣', viewValue: '彰化縣'},
    {value: '南投縣', viewValue: '南投縣'},
    {value: '嘉義市', viewValue: '嘉義市'},
    {value: '嘉義縣', viewValue: '嘉義縣'},
    {value: '雲林縣', viewValue: '雲林縣'},
    {value: '台南市', viewValue: '台南市'},
    {value: '高雄市', viewValue: '高雄市'},
    {value: '澎湖縣', viewValue: '澎湖縣'},
    {value: '金門縣', viewValue: '金門縣'},
    {value: '屏東縣', viewValue: '屏東縣'},
    {value: '台東縣', viewValue: '台東縣'},
    {value: '花蓮縣', viewValue: '花蓮縣'}
  ];
  garage_type = [
    {value: 0, viewValue: '平面'},
    {value: 1, viewValue: '車塔'},
    {value: 2, viewValue: '機械'},
    {value: 3, viewValue: '平面/機械混合'},
    {value: 4, viewValue: '地下室'}
  ];

  get customer_id() { return this.garageForm.get('customer_id'); }
  get garage_code() { return this.garageForm.get('garage_code'); }
  get garage_name() { return this.garageForm.get('garage_name'); }
  get city_name() { return this.garageForm.get('city_name'); }
  get district() { return this.garageForm.get('district'); }
  get address1() { return this.garageForm.get('address1'); }
  get address2() { return this.garageForm.get('address2'); }
  get business_hour_begin() { return this.garageForm.get('business_hour_begin'); }
  get business_hour_end() { return this.garageForm.get('business_hour_end'); }

  ngOnInit() {
    this.checkGarageCode = this.data.garage_code;
    // this.getTaiwanCity();
    this.initTimepicker();
    this.getCustomers();
    this.checkSuperUser();
    this.deviceService.check_enable_card_type(this.data.customer_id, 'iBox').subscribe( res => {
      // 取出該廠商啟用哪種卡種(該設定要在廠商層級設定) 如果一卡通啟用 則顯示plid欄位
      // console.log('card');
      // console.log(res);
      const card_case_code = res.data['enable_card_case'];
      // this.ibox_enable = this.iPass_card_case.indexOf(card_case_code) !== -1;
    }, err => {
    });
    if (this.data.garage_id !== undefined) {
      this.garageService.getGarageDevice(this.data.garage_id, 'iBox').subscribe( res => {
        this.garage_device = res.data;
        // console.log('garagedevice');
        // console.log(res.data);
      }, err => {
      });
    }
    if (this.data.garage_id !== undefined) {
      this.ticketTransactionService.getGarageTicketTransactionICash(this.data.garage_id).subscribe( res => {
        if(res.data != null){
          this.garage_ticket_transaction_icash = res.data;
          if (this.garage_ticket_transaction_icash.status == 1){
            this.cardType.iCash = true;
          }
        }
      }, err => {
      });
    }
    if (this.data.garage_id !== undefined) {
      this.ticketTransactionService.getGarageTicketTransactionIPass(this.data.garage_id).subscribe( res => {
        if(res.data != null){
          this.garage_ticket_transaction_ipass = res.data;
          if (this.garage_ticket_transaction_ipass.status == 1){
            this.cardType.iPass = true;
          }
        }
      }, err => {
      });
    }
    if (this.data.garage_id !== undefined) {
      this.ticketTransactionService.getGarageTicketTransactionHappyCash(this.data.garage_id).subscribe( res => {
        if(res.data != null){
          this.garage_ticket_transaction_happycash = res.data;
          if (this.garage_ticket_transaction_happycash.status == 1){
            this.cardType.YHDP = true;
          }
        }

      }, err => {
      });
    }
    this.garageForm = this._formBulider.group({
      customer_id: [this.data.customer_id],
      garage_code: [this.data.garage_code, Validators.required, isGarageCodeExistValidator(this.garageService)],
      garage_name: [this.data.garage_name, Validators.compose([Validators.required, characterLengthValidator(30)])],
      city_name: [this.data.city_name, Validators.required],
      district: [this.data.district, Validators.required],
      address1: [this.data.address1, Validators.compose([Validators.required, characterLengthValidator(60)])],
      address2: [this.data.address2, Validators.required],
      business_hour_begin: [this.data.business_hour_begin],
      business_hour_end: [this.data.business_hour_end],
    });
    this.garageForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
      this.garageFormCheck.emit(this.garageForm.valid);
    });
  }
  initTimepicker() {
    // timepicker must be string
    // remove '0' ex:08:05 >8:5
    this.start_config = { hour: 0, minute: 0, meriden: 'PM', format: 24 };
    this.end_config = { hour: 23, minute: 59, meriden: 'PM', format: 24 };
  if (this.data.business_hour_begin != null) {
    // tslint:disable-next-line:max-line-length
    const start_hour = this.data.business_hour_begin.substr(0, 1) === '0' ? Number(this.data.business_hour_begin.substr(1, 1)) : Number(this.data.business_hour_begin.substr(0, 2)) ;
    // tslint:disable-next-line:max-line-length
    const start_min = this.data.business_hour_begin.substr(3, 1) === '0' ? Number(this.data.business_hour_begin.substr(4, 1)) : Number(this.data.business_hour_begin.substr(3, 2)) ;
    this.start_config = { hour: start_hour, minute: start_min, meriden: 'PM', format: 24 };
  }
  if (this.data.business_hour_end != null) {
    // tslint:disable-next-line:max-line-length
    const end_hour = this.data.business_hour_end.substr(0, 1) === '0' ? Number(this.data.business_hour_end.substr(1, 1)) : Number(this.data.business_hour_end.substr(0, 2)) ;
    // tslint:disable-next-line:max-line-length
    const end_min = this.data.business_hour_end.substr(3, 1) === '0' ? Number(this.data.business_hour_end.substr(4, 1)) : Number(this.data.business_hour_end.substr(3, 2)) ;
     this.end_config = { hour: end_hour, minute: end_min, meriden: 'PM', format: 24 };
    }
  }

  save() {
    if (this.garageForm.valid ||
      (this.garageForm.get('garage_code').value === this.checkGarageCode && this.checkGarageCode !== undefined)) {
        this.garage_device.store_no = this.data.customer_garage_id;
      this.savedResponse = new ApiResponse<number>();
      this.getGarageDevice.emit(this.garage_device);
      if (this.cardType.iCash) {
        this.getGarageTicketTransactionICash.emit(this.garage_ticket_transaction_icash);
      }
      else{
        this.getGarageTicketTransactionICash.emit(null);
      }
      if (this.cardType.iPass) {
        this.getGarageTicketTransactionIPass.emit(this.garage_ticket_transaction_ipass);
      }
      else{
        this.getGarageTicketTransactionIPass.emit(null);
      }
      if (this.cardType.YHDP) {
        this.getGarageTicketTransactionHappyCash.emit(this.garage_ticket_transaction_happycash);
      }
      else{
        this.getGarageTicketTransactionHappyCash.emit(null);
      }
      this.onSave.emit();
      console.log(this.garage_device);
    } else {
      this.savedResponse.has_error = true;
      this.savedResponse.message = '請確認必填欄位皆正確';
    }
  }

  cancel() {
    this.onClose.emit();
  }

  updateTimeStart(e) {
    this.data.business_hour_begin = ( e.hour.toString()) + ':' + ( e.minute.toString());
    console.log(this.data.business_hour_begin);
  }
  updateTimeEnd(e) {
    this.data.business_hour_end = (e.hour.toString()) + ':' + ( e.minute.toString());
    console.log(this.data.business_hour_end);
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe( res => {
      this.customerResponse = res;
    });
  }
  checkSuperUser() {
    this.isSuperUser = this.sessionStorage.getIsSuperUser();
    if (this.isSuperUser !== true) {
      this.data.customer_id = this.sessionStorage.getCustomerId();
    }
  }
  getTaiwanCity() {
    // this.http.get('https://api.opencube.tw/twzipcode/get-citys').subscribe( x => {
      //   console.log(x);
      // });
  }
  getTaiwanDistinct() {
    // this.http.get(' http://api.opencube.tw/twzipcode').subscribe( x => {
      //   console.log(x);
      // });
  }
  getChildValue(e) {
      this.garage_device = e;
      this.getGarageDevice.emit(this.garage_device);
    }
  getChildValueICash(e) {
      this.garage_ticket_transaction_icash = e;
      this.getGarageTicketTransactionICash.emit(this.garage_ticket_transaction_icash);
    }
  getChildValueIPass(e) {
      this.garage_ticket_transaction_ipass = e;
      this.getGarageTicketTransactionIPass.emit(this.garage_ticket_transaction_ipass);
    }
  getChildValueHappyCash(e) {
      this.garage_ticket_transaction_happycash = e;
      this.getGarageTicketTransactionHappyCash.emit(this.garage_ticket_transaction_happycash);
    }
  }




    // export class ServiceTime {
      //   hour: string;
      //   min: string;
      // }

  export class SelectCity {
    // cities = [
      //   {value: '台北市', viewValue: '台北市'},
      //   {value: '基隆市', viewValue: '基隆市'},
      //   {value: '新北市', viewValue: '新北市'}
      // ];

  }
