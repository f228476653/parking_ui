import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { GarageService } from '../../../services/garage.service';
import { ApiResponse, SessionStorage, CardType, RegPattern } from '../../../shared/index';
import { DeviceIbox, SlotData } from '../../../shared/device_ibox';
import { Component, OnInit, Inject } from '@angular/core';
import {  FormGroup, FormBuilder } from '@angular/forms';
import { DeviceService } from '../../../services/device.service';
import { CustomerDevice, CustomerMapCardCase } from '../../../shared/customer-device';
import { GarageDevice } from '../../../shared/garage_device';
@Component({
  selector: 'app-device-ibox-configuration-dialog',
  templateUrl: './device-ibox-configuration-dialog.component.html',
  styleUrls: ['./device-ibox-configuration-dialog.component.css']
})
export class DeviceIboxConfigurationDialogComponent implements OnInit {
  customer_id: number;
  garage_id: number;
  device_id: number;
  device_ibox = new DeviceIbox();
  data = new CustomerDevice();
  garage_device = new GarageDevice();
  initIP;
  slotData = new SlotData();
  customer_map_card_case: CustomerMapCardCase;
  device_type: string;
  cardType = new CardType();
  chipMapList = {'car_in': [], 'car_out': []};
  regPattern = new RegPattern();
  deviceFormCheck: boolean;
  customerDeviceFormCheck: boolean;
  garageDeviceFormCheck: boolean;
  deviceIboxForm: FormGroup;
  savedResponse: ApiResponse<any> = new ApiResponse<any>();
  lastCheck = false;
  display = true;
  constructor(public dialogRef: MatDialogRef<DeviceIboxConfigurationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData, public editDialog: MatDialog, public garageService: GarageService,
    public sessionStorage: SessionStorage, public deviceService: DeviceService, private _fb: FormBuilder ) {
   }

  deivceCheck(e: boolean) {
     this.deviceFormCheck = e;
  }

  customerDeviceCheck(e: boolean) {
    this.customerDeviceFormCheck = e;
  }

  garageDeviceCheck(e: boolean) {
    this.garageDeviceFormCheck = e;
  }

  ngOnInit() {
    // console.log(this.check);
    this.customer_id = this.dialogData['customer_id'];
    this.garage_id = this.dialogData['garage_id'];
    this.device_type = this.dialogData['device_type'];
    this.device_id = this.dialogData['device_id'];
    this.initCustomerDevice();
    this.initDevice();
    this.initGarageDevice();
  }

  initDevice() {
    // 取得設備層級參數
    if (this.device_id !== undefined) {
      this.deviceService.get_device_by_device_id('iBox', this.device_id).subscribe(response => {
        this.device_ibox = response.data;
          // console.log('觀察');
          const card_order = this.device_ibox['card_order'].split(',');
          // console.log(card_order);
          this.slotData.slot1 = card_order[0];
          this.slotData.slot2 = card_order[1];
          this.slotData.slot3 = card_order[2];
          this.slotData.slot4 = card_order[3];
          this.initIP = this.device_ibox.ip;
       });
     }
  }

  initGarageDevice() {
    this.garageService.getGarageDevice(this.garage_id, 'iBox').subscribe( res => {
      this.garage_device = res.data;
      // console.log('garagedevice');
      // console.log(res.data);
    }, err => {
    });
  }

  initCustomerDevice() {
    // 取得廠商層級參數
    this.deviceService.get_customer_device_argument_by_customer_id(this.customer_id, 'iBox').subscribe(response => {
      // console.log(response);
      if (response.data[this.device_type] != null) {
        this.data = response.data[this.device_type];
        this.customer_map_card_case = response.data['card_case'];
        this.decodeingCardCaseCode(this.customer_map_card_case.enable_card_case);
      }
    });
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

  checkToken() {
    // 檢查帳號是否正確 如不正確關掉dialog
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }

  cancel() {
    this.onCloseDailog();
  }

  once_save() {
    this.save();
    if (!this.savedResponse.has_error) {
      this.onCloseDailog();
    }
  }

  fillZero(data: string, length: number) {
    return (Array(length).join('0') + data).slice(-length);
  }

  save() {
    this.lastCheck = true;
    this.device_ibox['card_order'] = this.slotData.slot1 + ',' + this.slotData.slot2 + ',' +
    this.slotData.slot3 + ',' + this.slotData.slot4;
    // iPass 外部ip 同 設備ip
    this.device_ibox['external_ip'] = this.device_ibox['ip'];
    // pos 代碼為ip末碼
    const temp = this.device_ibox['ip'].split('.')[3];
    this.device_ibox['pos_no'] = this.fillZero(temp, 3);
    if (this.deviceFormCheck && this.customerDeviceFormCheck && this.garageDeviceFormCheck) {
      this.device_ibox.garage_id = this.garage_id;
      const bean = {'bean': this.device_ibox, 'device_type': this.device_type};
      this.deviceService.save_device(bean).subscribe( res => {
        this.checkToken();
        this.savedResponse = res;
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
      });
    } else {
      this.savedResponse.has_error = true;
      this.savedResponse.message = '請確認必填欄位皆正確';
    }
  }

}
