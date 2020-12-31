import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CardType, RegPattern } from '../../../shared/index';
import { DeviceService } from '../../../services/device.service';
import { CustomerMapCardCase } from '../../../shared/customer-device';
import { DeviceIbox, SlotData } from '../../../shared/device_ibox';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { debounceTime } from 'rxjs/operators';
import { isDuplicateIPValidator } from '../../../shared/form-valiadtor';
import { GarageService } from '../../../services';
@Component({
  selector: 'app-device-ibox-form',
  templateUrl: './device-ibox-form.component.html',
  styleUrls: ['./device-ibox-form.component.css']
})
export class DeviceIboxFormComponent implements OnInit {
  @Input() customer_id: number;
  @Input() garage_id: number;
  @Input() device_id: number;
  @Input() device_ibox: DeviceIbox;
  @Input() slotData: SlotData;
  @Input() validators: boolean;
  @Input() checkDevice: boolean;
  @Input() chipMapList;
  @Input() lastCheck;
  @Input() initIP: String;
  @Output() deviceFormCheck = new EventEmitter<boolean>();
  customer_map_card_case: CustomerMapCardCase;
  cardType = new CardType();
  device_type = 'iBox';
  separatorKeysCodes = [ENTER, COMMA];
  ip_validator = new FormControl();
  regPattern = new RegPattern();
  separator = [ENTER, COMMA];
  deviceForm: FormGroup;
  slot_select_bar = [{'name': '不啟用', 'value': 'None'}, {'name': 'iCash', 'value': 'iCash'},
  {'name': 'iPass', 'value': 'iPass'}, {'name': 'YHDP', 'value': 'YHDP'}, {'name': 'ECC', 'value': 'ECC'}];
  slot2_data;
  slot3_data;
  slot4_data;

  constructor(public deviceService: DeviceService, private _formBulider: FormBuilder, public garageService: GarageService) {
  }
  // get device_name() { return this.deviceForm.get('device_name'); }
  // get external_ip() { return this.deviceForm.get('external_ip'); }
  // get station_inout() { return this.deviceForm.get('station_inout'); }
  // get check() { return this.deviceForm.get('check'); }
  // get gateway() { return this.deviceForm.get('gateway'); }
  // get eid_pos_no() { return this.deviceForm.get('eid_pos_no'); }
  // get client_pv() { return this.deviceForm.get('client_pv'); }
  // get time_sync_period() { return this.deviceForm.get('time_sync_period'); }
  // get pos_no() { return this.deviceForm.get('pos_no'); }
  get check1() { return this.deviceForm.get('check1'); }
  get check2() { return this.deviceForm.get('check2'); }

  ngOnInit() {
    this.deviceService.get_customer_device_argument_by_customer_id(this.customer_id, this.device_type).subscribe(response => {
      if (response.data[this.device_type] != null) {
         this.customer_map_card_case = response.data['card_case'];
         this.decodeingCardCaseCode(this.customer_map_card_case.enable_card_case);
      }
     });
     // nested formGroup
     this.deviceForm = this._formBulider.group({
       check1: this._formBulider.group({
          device_name: [this.device_ibox.device_name, [Validators.required ,
            Validators.pattern(this.regPattern.match_TW_ZH_Number), Validators.maxLength(20)]],
          // external_ip: [this.device_ibox.external_ip, [Validators.required , Validators.pattern(this.regPattern.IPV4)]],
          station_inout: [this.device_ibox.station_inout],
          gateway: [this.device_ibox.gateway, [Validators.required , Validators.pattern(this.regPattern.IPV4)]],
          // eid_pos_no: [this.device_ibox.eid_pos_no, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
          // pos_no: [this.device_ibox.pos_no, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]]
       }),
      check2: new FormGroup({
          ip: new FormControl(this.device_ibox.ip, [Validators.required, Validators.pattern(this.regPattern.IPV4)]),
          garage_id: new FormControl(this.garage_id)
        }, Validators.required, isDuplicateIPValidator(this.deviceService))
      });
    this.deviceForm.statusChanges.pipe(debounceTime(500)).subscribe( res => {
      const check1 = this.deviceForm.get('check1').valid;
      const check2 = this.deviceForm.get('check2');
      const checkIP = check2.valid || (this.check2.get('ip').value === this.device_ibox.ip && this.initIP !== undefined);
      this.deviceFormCheck.emit(checkIP && check1);
    });
  }

  check_card_case() {
    // 檢查卡種是否有輸入過或修改過
    if (this.customer_map_card_case === undefined) {
      // 代表第一次輸入 要新增卡種
      const code = this.codeingCardCaseCode();
      this.customer_map_card_case = new CustomerMapCardCase();
      this.customer_map_card_case.customer_id = this.customer_id;
      this.customer_map_card_case.device_type = this.device_type;
      this.customer_map_card_case.enable_card_case = this.codeingCardCaseCode();
    } else {
      // 代表輸入過 要修改卡種
      this.customer_map_card_case.enable_card_case = this.codeingCardCaseCode();
    }
  }

  codeingCardCaseCode() {
    // TODO 之後用補數方式 計算 節省空間
    const c = this.cardType.iCash;
    const p = this.cardType.iPass;
    const y = this.cardType.YHDP;
    let card_case;
    if (c === false && p === false && y === false) {
      card_case = 0;
    } else if (c === true && p === false && y === false) {
      card_case = 1;
    } else if (c === false && p === true && y === false) {
      card_case = 2;
    } else if (c === false && p === false && y === true) {
      card_case = 3;
    } else if (c === true && p === true && y === false) {
      card_case = 4;
    } else if (c === true && p === false && y === true) {
      card_case = 5;
    } else if (c === false && p === true && y === true) {
      card_case = 6;
    } else if (c === true && p === true && y === true) {
      card_case = 7;
    }
    return card_case;
  }

  decodeingCardCaseCode(code) {
    // TODO 之後用補數方式 計算 節省空間
    if (code === 1) {
      this.cardType.iCash = true;
    }
    if (code === 2) {
      this.cardType.iPass = true;
    }
    if (code === 3) {
      this.cardType.YHDP = true;
    }
    if (code === 4) {
      this.cardType.iCash = true;
      this.cardType.iPass = true;
    }
    if (code === 5) {
      this.cardType.iCash = true;
      this.cardType.YHDP = true;
    }
    if (code === 6) {
      this.cardType.iCash = true;
      this.cardType.iPass = true;
    }
    if (code === 7) {
      this.cardType.iCash = true;
      this.cardType.iPass = true;
      this.cardType.YHDP = true;
    }
  }
}
