import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { SessionStorage, ApiResponse } from '../../../shared';
import { FeeRule, FeePara, FeeRadioButtonGroup } from '../../../shared/fee';
import { FeeServiceService } from '../../../services/fee-service.service';

@Component({
  selector: 'app-fee-dialog',
  templateUrl: './fee-dialog.component.html',
  styleUrls: ['./fee-dialog.component.css']
})
export class FeeDialogComponent implements OnInit {
  feeRule =  new FeeRule();
  feePara1 = new FeePara();
  feePara2 = new FeePara();
  addDay = {'normalDay': [], 'holiday': []};
  feeRadioButtonGroup = new FeeRadioButtonGroup();
  carType;
  garageID: number;
  savedResponse: ApiResponse<any> = new ApiResponse<any>();
  constructor(public dialogRef: MatDialogRef<FeeDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public dialogData, public editDialog: MatDialog,
     public sessionStorage: SessionStorage, public feeService: FeeServiceService) { }

  ngOnInit() {
    // console.log(this.dialogData);
    this.garageID = this.dialogData['garage_id'];
    this.carType = this.dialogData['car_type'];
      this.feeService.get_fee_args_by_garage_id(this.garageID, this.carType).subscribe(res => {
        console.log('qqqqqqqqqqqqqqqqq');
        console.log(res.data);
        if (res.data['status']) {
          this.feeRule = res.data['fee_rule'];
          this.feePara1 = res.data['fee_para1'];
          this.feePara2 = res.data['fee_para2'];
          this.init_radio_button(this.feeRule, this.feePara1, this.feePara2);
        }
        // build normal chips & holiday chips
        if ('fee_rule_id' in this.feeRule) {
          this.addDay['holiday'] = this.feeRule.holiday.split(',');
          this.addDay['normalDay'] = this.feeRule.normal_day.split(',');
        } else {
          // default special_day
          console.log('give default special_day');
          this.feeService.get_special_day_list(2018).subscribe(response => {
            this.addDay['holiday'] = response.data['holiday'].map( r => r['date']);
            this.addDay['normalDay'] = response.data['normal_day'].map( r => r['date']);
          }, error => {
            console.log('取得日期API有錯');
          });
        }
      }, error => {
        console.log('取得費率參數API有錯');
      });
  }

  init_radio_button(feeRule, feePara1, feePara2) {
    this.feeRadioButtonGroup.mode = feeRule['fee_mode'] < 3 ? 1 : 2;
    if (feeRule['free_time'] === 0) {
      this.feeRadioButtonGroup.free_mode = 0;
    } else {
      this.feeRadioButtonGroup.free_mode = feeRule['free_time'] < 0 ? 1 : 2;
    }
    if (feeRule['new_car_hour'] !== 0 && feeRule['period'] !== 30 || feeRule['period'] !== 60) {
      this.feeRadioButtonGroup.hourMode = 2;
    } else {
      this.feeRadioButtonGroup.hourMode = feeRule['period'] === 30 ? 1 : 0;
    }
    if (feePara1['special_rule'] === 0 && feePara1['monthly_pass'] === 0) {
      this.feeRadioButtonGroup.special_mode = 'disable';
    } else if (feePara1['special_rule'] !== 0) {
      this.feeRadioButtonGroup.special_mode = 'special_rule';
      this.feeRadioButtonGroup.special_mode_value = feePara1['special_rule'];
    }  else if (feePara1['monthly_pass'] !== 0) {
      this.feeRadioButtonGroup.special_mode = 'monthly_pass';
      this.feeRadioButtonGroup.special_mode_value = feePara1['special_rule'];
    }
    if (feePara2['special_rule'] === 0 && feePara2['monthly_pass'] === 0) {
      this.feeRadioButtonGroup.special_mode2 = 'disable';
    } else if (feePara2['special_rule'] !== 0) {
      this.feeRadioButtonGroup.special_mode2 = 'special_rule';
      this.feeRadioButtonGroup.special_mode_value2 = feePara1['special_rule'];
    }  else if (feePara2['monthly_pass'] !== 0) {
      this.feeRadioButtonGroup.special_mode2 = 'monthly_pass';
      this.feeRadioButtonGroup.special_mode_value2 = feePara1['special_rule'];
    }
    console.log(this.feeRadioButtonGroup);
  }


  submit() {
    console.log('送出');
    this.feeRule.car_type = this.carType;
    // 之後要改
    this.feeRule.garage_id = this.garageID;
    this.feePara1.fee_para_mode = 'normal_day';
    this.feePara2.fee_para_mode = 'holiday';
    this.feeRule.holiday = this.addDay['holiday'].join(',');
    this.feeRule.normal_day = this.addDay['normalDay'].join(',');
    if (this.feeRadioButtonGroup.free_mode === 0) {
      this.feeRule.free_time = 0;
    }
    console.log(this.feeRule);
    console.log(this.feePara1);
    console.log(this.feePara2);
    this.feeService.save_or_update_fee_args(this.feeRule, this.feePara1, this.feePara2).subscribe(res => {
      this.checkToken();
      this.savedResponse = res;
    }, err => {
      this.checkToken();
      this.savedResponse = err.error;
    });
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
}
