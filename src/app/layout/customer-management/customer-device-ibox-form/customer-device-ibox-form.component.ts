import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiResponse, SessionStorage, CardType, RegPattern} from '../../../shared/index';
import { CustomerDevice } from '../../../shared/customer-device';
import { debounceTime, debounce } from 'rxjs/operators';
@Component({
  selector: 'app-customer-device-ibox-form',
  templateUrl: './customer-device-ibox-form.component.html',
  styleUrls: ['./customer-device-ibox-form.component.css']
})
export class CustomerDeviceIboxFormComponent implements OnInit {
  @Input() readOnly: boolean;
  @Input() data: CustomerDevice;
  @Input() cardType: CardType;
  @Output() customerDeviceFormValidator = new EventEmitter<boolean>();
  regPattern = new RegPattern();
  customerDeviceForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerDeviceForm = this._formBuilder.group({
      // customer-device 帳號參數 目前給預設質 (如要改需創帳號在去其資料庫修改)
      // shareGroup: this._formBuilder.group({
      //   host_ip: [this.data.host_ip, [Validators.required, Validators.pattern(this.regPattern.IPV4)]],
      //   host_port: [this.data.host_port, [Validators.required, Validators.pattern(this.regPattern.port)]],
      //   host_user: [this.data.host_user, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
      //   host_pwd: [this.data.host_pwd, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]]
      // }),
      iCashGroup: this._formBuilder.group({
        market_code: [this.data.market_code, [Validators.required, Validators.maxLength(3),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        cashier_no: [this.data.cashier_no, [Validators.required, Validators.maxLength(4),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]]
      }),
      iPassGroup: this._formBuilder.group({
        system_id: [this.data.system_id, [Validators.required, Validators.maxLength(2),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        comp_id: [this.data.comp_id, [Validators.required, Validators.maxLength(2),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        machine: [this.data.machine, [Validators.required, Validators.maxLength(8),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        ipass_water_lv_host: [this.data.ipass_water_lv_host, [Validators.required, Validators.pattern(this.regPattern.IPV4),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        ipass_water_lv_port: [this.data.ipass_water_lv_port, [Validators.required, Validators.pattern(this.regPattern.port)]],
        socket_ip: [{value: this.data.socket_ip, disabled: this.readOnly}, Validators.required]
      }),
      YHDPGroup: this._formBuilder.group({
        transaction_system_id: [this.data.transaction_system_id, [Validators.required, Validators.maxLength(2),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        loc_id: [this.data.loc_id, [Validators.required, Validators.maxLength(2),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        transaction_terminal_no: [this.data.transaction_terminal_no, [Validators.required, Validators.maxLength(8),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        tid: [this.data.tid, [Validators.required, Validators.maxLength(8),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        mid: [this.data.mid, [Validators.required, Validators.maxLength(16),
          Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        YHDP_water_lv: [this.data.YHDP_water_lv, [Validators.required, Validators.pattern(this.regPattern.onlyNumber)]],
        YHDP_water_lv_host: [this.data.YHDP_water_lv_host, [Validators.required, Validators.pattern(this.regPattern.IPV4)]],
        YHDP_water_lv_port: [this.data.YHDP_water_lv_port, [Validators.required, Validators.pattern(this.regPattern.port)]],
        nii: [{value: this.data.nii, disabled: this.readOnly}, Validators.required]
      })
    });
    this.customerDeviceForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
      let check = true;
      if (this.cardType.iCash) {
        check = check && this.iCashGroupValid.valid;
      }
      if (this.cardType.iPass) {
        check = check && this.iPassGroupValid.valid;
      }
      if (this.cardType.YHDP) {
        check = check && this.YHDPGroupValid.valid;
      }
        this.customerDeviceFormValidator.emit(check);
    });
  }

  // get shareGroupValid() { return this.customerDeviceForm.get('shareGroup'); }
  get iCashGroupValid() { return this.customerDeviceForm.get('iCashGroup'); }
  get iPassGroupValid() { return this.customerDeviceForm.get('iPassGroup'); }
  get YHDPGroupValid() { return this.customerDeviceForm.get('YHDPGroup'); }


}
