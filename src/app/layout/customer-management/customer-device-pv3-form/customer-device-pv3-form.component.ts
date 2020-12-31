import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiResponse, SessionStorage, CardType, RegPattern} from '../../../shared/index';
import { CustomerDevice } from '../../../shared/customer-device';
import { debounceTime, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-customer-device-pv3-form',
  templateUrl: './customer-device-pv3-form.component.html',
  styleUrls: ['./customer-device-pv3-form.component.css']
})
export class CustomerDevicePv3FormComponent implements OnInit {

  @Input() readOnly: boolean;
  @Input() data: CustomerDevice;
  @Input() cardType: CardType;
  @Output() customerDeviceFormValidator = new EventEmitter<boolean>();
  regPattern = new RegPattern();
  customerDeviceForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerDeviceForm = this._formBuilder.group({
      shareGroup: this._formBuilder.group({
        host_ip: [this.data.host_ip, [Validators.required, Validators.pattern(this.regPattern.IPV4)]],
        host_port: [this.data.host_port, [Validators.required, Validators.pattern(this.regPattern.port)]],
        host_user: [this.data.host_user, Validators.required],
        host_pwd: [this.data.host_pwd, Validators.required]
      }),
      iCashGroup: this._formBuilder.group({
        market_code: [this.data.market_code, [Validators.required, Validators.maxLength(3)]],
        cashier_no: [this.data.cashier_no, [Validators.required, Validators.maxLength(4)]]
      }),
      iPassGroup: this._formBuilder.group({
        system_id: [this.data.system_id, [Validators.required, Validators.maxLength(2)]],
        comp_id: [this.data.comp_id, [Validators.required, Validators.maxLength(2)]],
        machine: [this.data.machine, [Validators.required, Validators.maxLength(8)]],
        ipass_water_lv_host: [this.data.ipass_water_lv_host, [Validators.required, Validators.pattern(this.regPattern.IPV4)]],
        ipass_water_lv_port: [this.data.ipass_water_lv_port, [Validators.required, Validators.pattern(this.regPattern.port)]],
        socket_ip: [{value: this.data.socket_ip, disabled: this.readOnly}, Validators.required]
      }),
      YHDPGroup: this._formBuilder.group({
        transaction_system_id: [this.data.transaction_system_id, [Validators.required, Validators.maxLength(2)]],
        loc_id: [this.data.loc_id, [Validators.required, Validators.maxLength(2)]],
        transaction_terminal_no: [this.data.transaction_terminal_no, [Validators.required, Validators.maxLength(8)]],
        tid: [this.data.tid, [Validators.required, Validators.maxLength(8)]],
        mid: [this.data.mid, [Validators.required, Validators.maxLength(16)]],
        YHDP_water_lv: [this.data.YHDP_water_lv, [Validators.required, Validators.pattern(this.regPattern.onlyNumber)]],
        YHDP_water_lv_host: [this.data.YHDP_water_lv_host, [Validators.required, Validators.pattern(this.regPattern.IPV4)]],
        YHDP_water_lv_port: [this.data.YHDP_water_lv_port, [Validators.required, Validators.pattern(this.regPattern.port)]],
        nii: [{value: this.data.nii, disabled: this.readOnly}, Validators.required]
      })
    });
    this.customerDeviceForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
      let check = this.shareGroupValid.valid;
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

  get shareGroupValid() { return this.customerDeviceForm.get('shareGroup'); }
  get iCashGroupValid() { return this.customerDeviceForm.get('iCashGroup'); }
  get iPassGroupValid() { return this.customerDeviceForm.get('iPassGroup'); }
  get YHDPGroupValid() { return this.customerDeviceForm.get('YHDPGroup'); }

  test() {
    // const a = this.iPassGroupValid.get('socket_ip').value;
    console.log(this.customerDeviceForm);
  }

}
