import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../../../services/customer.service';
import { ApiResponse, SessionStorage, CardType} from '../../../shared/index';
import { CustomerDevice, CustomerMapCardCase } from '../../../shared/customer-device';
import { DeviceService } from '../../../services/device.service';

@Component({
  selector: 'app-customer-device-dialog',
  templateUrl: './customer-device-dialog.component.html',
  styleUrls: ['./customer-device-dialog.component.css']
})
export class CustomerDeviceDialogComponent implements OnInit {
  id = this.customerID;
  data = new CustomerDevice();
  customer_map_card_case: CustomerMapCardCase;
  savedResponse: ApiResponse<number> = new ApiResponse<number>();
  cardType = new CardType();
  device_type = 'iBox';
  index = 0;
  isChooseYHDP: boolean;
  constructor(public dialogRef: MatDialogRef<CustomerDeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public customerID: number, public customerService: CustomerService,
    public sessionStorage: SessionStorage, public deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService.get_customer_device_argument_by_customer_id(this.customerID, 'iBox').subscribe(response => {
      // console.log(response);
      if (response.data[this.device_type] != null) {
         this.data = response.data[this.device_type];
         this.customer_map_card_case = response.data['card_case'];
         this.decodeingCardCaseCode(this.customer_map_card_case.enable_card_case);
      }
     });
  }

  changeIndex() {
    // TODO 這邊切換頁面時 呼叫api顯示不同的 客戶-設備參數
  }

  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }

  fillZero(data: string, length: number) {
    return (Array(length).join('0') + data).slice(-length);
  }

  checkYHDP(e) {
    this.isChooseYHDP = e;
  }

  save() {
      this.chack_bean();
      this.check_card_case();
      console.log(this.isChooseYHDP);
      // if (this.isChooseYHDP) {
      //   this.data['tid'] = this.fillZero(this.data['tid'], 8);
      //   this.data['mid'] = this.fillZero(this.data['mid'], 16);
      //   this.data['loc_id'] = this.fillZero(this.data['loc_id'], 2);
      //   this.data['transaction_system_id'] = this.fillZero(this.data['transaction_system_id'], 2);
      // }
      const data = { 'bean' : this.data, 'card_case': this.customer_map_card_case,
      'customer_id': this.id, 'device_type': this.device_type};
      console.log(data);
      // // console.log(data);
      // this.deviceService.store_customer_device_args(data).subscribe(response => {
      //   this.checkToken();
      //   this.savedResponse = response;
      //   // console.log(response);
      //  }, err => {
      //   this.checkToken();
      //   this.savedResponse = err.error;
      // });
  }

  chack_bean() {
    if (!this.data.customer_id) {
      // 代表第一次 要新增 要補上customer_id
      this.data.customer_id = this.id;
    }
  }

  check_card_case() {
    // 檢查卡種是否有輸入過或修改過
    if (this.customer_map_card_case === undefined) {
      // 代表第一次輸入 要新增卡種
      const code = this.codeingCardCaseCode();
      this.customer_map_card_case = new CustomerMapCardCase();
      this.customer_map_card_case.customer_id = this.id;
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
