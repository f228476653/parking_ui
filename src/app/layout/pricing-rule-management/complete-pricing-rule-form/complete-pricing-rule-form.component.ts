import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FeeRule, FeePara, FeeRadioButtonGroup, Annotation } from '../../../shared/fee';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import { MatSelect } from '@angular/material';
import { RegPattern } from '../../../shared';

export class EqualValidator {
  static validate(equalFormGroup: FormGroup) {
    const a1 = parseInt(equalFormGroup.get('normal_day_interval_1_fee_start').value, 10);
    const a2 = parseInt(equalFormGroup.get('normal_day_interval_1_fee_end').value, 10);
    const b1 = parseInt(equalFormGroup.get('normal_day_interval_2_fee_start').value, 10);
    const b2 = parseInt(equalFormGroup.get('normal_day_interval_2_fee_end').value, 10);
    if (a1 > a2) {
      return { 'startError': true };
    } else if (a1 !== b2  && a2 !== b1 ) {
      return { 'hourMatchError': true };
    }
    return null;
  }
}

export class EqualValidator2 {
  static validate(equalFormGroup: FormGroup) {
    const a1 = parseInt(equalFormGroup.get('holiday_day_interval_1_fee_start').value, 10);
    const a2 = parseInt(equalFormGroup.get('holiday_day_interval_1_fee_end').value, 10);
    const b1 = parseInt(equalFormGroup.get('holiday_day_interval_2_fee_start').value, 10);
    const b2 = parseInt(equalFormGroup.get('holiday_day_interval_2_fee_end').value, 10);
    // console.log(a1);
    // console.log(a2);
    if (a1 > a2) {
      return { 'startError': true };
    } else if (a1 !== b2  && a2 !== b1 ) {
      return { 'hourMatchError': true };
    }
    return null;
  }
}
@Component({
  selector: 'app-complete-pricing-rule-form',
  templateUrl: './complete-pricing-rule-form.component.html',
  styleUrls: ['./complete-pricing-rule-form.component.css']
})
export class CompletePricingRuleFormComponent implements OnInit {
  @ViewChild('aaa') aaa1: MatSelect;
  @Input() feeRule: FeeRule;
  @Input() feePara1: FeePara;
  @Input() feePara2: FeePara;
  @Input() feeRadioButtonGroup: FeeRadioButtonGroup;
  @Input() carType;
  @Input() addDay;
  @Output() Commit = new EventEmitter<boolean>();
  validatorStatus = true;
  separator = [ENTER, COMMA];
  fee_mode: FormGroup;
  fee_para1: FormGroup;
  fee_para2: FormGroup;
  annotation = new Annotation();
  mode: number;
  free_mode: number;
  normal_mode: number;
  holiday_mode: number;
  special_max_mode: number;
  hourMode: string;
  max_mode_description = ['最高計費模式說明...', '最大金額模式說明...'];
  step1: FormGroup;
  check1: FormGroup;
  check2: FormGroup;
  check3: FormGroup;
  check4: FormGroup;
  regPattern = new RegPattern();
  constructor(private _formBuilder: FormBuilder) { }

  aaa() {
    this.feeRule.free_time = -this.feeRule.free_time;
    // console.log(this.carType);
  }

  aa(e) {
    // console.log('change');
    // console.log(e);
  }

   check_ip(e, type: string) {
    const input = e.input;
    const value = e.value;
    // console.log(type);
    if ((value || '').trim()) {
        this.addDay[type].push(value);
      }
    if (input) {
      input.value = '';
    }
  }

  remove_ip(removeDay: string, type: string) {
    const index = this.addDay[type].indexOf(removeDay);
    if (index >= 0) {
      this.addDay[type].splice(index, 1);
    }
  }

  z1() {
    const a = this.check1;
    // console.log(a);
    // console.log(a.valid);
    // console.log(a.status);
  }

  z2() {
    const a = this.check2;
    // console.log(a);
    // console.log(a.valid);
    // console.log(a.status);
  }

  z3() {
    const a = this.check3;
    // console.log(a.valid);
    // console.log(a.status);
  }

  z4() {
    const a = this.check4;
    // console.log(a.valid);
    // console.log(a.status);
  }

  ngOnInit() {
    // console.log('qqqqqq');
    // console.log(this.carType);
    // const aa = Observable.of(this.qq);
    // aa.subscribe(r => {
    //   console.log('訂閱中...');
    //   console.log(r);
    // });
    this.aaa1.valueChange.subscribe(r => {
      // console.log('訂閱中...');
      // console.log(r);
    });
    this.check1 = this._formBuilder.group({
      fee_name: [this.feeRule.fee_args_name, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
      fee_mode: [this.feeRule.fee_mode, Validators.required],
      free_time: [this.feeRule.free_time, [Validators.required, Validators.pattern(this.regPattern.onlyNumber)]],
      new_car_hour: [this.feeRule.new_car_hour, [Validators.required, Validators.pattern(this.regPattern.onlyNumber)]],
      period: [this.feeRule.period, [Validators.required, Validators.pattern(this.regPattern.onlyNumber)]]
    }),
    this.check2 = this._formBuilder.group({
      normal_day_interval_1_fee: [this.feePara1.hour_period_fee1, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      normal_day_interval_1_fee_start: [this.feePara1.hour_period_fee1_start, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      normal_day_interval_1_fee_end: [this.feePara1.hour_period_fee1_end, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      normal_day_interval_2_fee: [this.feePara1.hour_period_fee2, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      normal_day_interval_2_fee_start: [this.feePara1.hour_period_fee2_start, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      normal_day_interval_2_fee_end: [this.feePara1.hour_period_fee2_end, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]]
    }, {validator: EqualValidator.validate.bind(this)}),
    this.check3 = this._formBuilder.group({
      holiday_day_interval_1_fee: [this.feePara2.hour_period_fee1, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      holiday_day_interval_1_fee_start: [this.feePara2.hour_period_fee1_start, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      holiday_day_interval_1_fee_end: [this.feePara2.hour_period_fee1_end, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      holiday_day_interval_2_fee: [this.feePara2.hour_period_fee2, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      holiday_day_interval_2_fee_start: [this.feePara2.hour_period_fee2_start, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]],
      holiday_day_interval_2_fee_end: [this.feePara2.hour_period_fee2_end, [Validators.required,
        Validators.pattern(this.regPattern.onlyNumber)]]
    }, {validator: EqualValidator2.validate.bind(this)}),
    this.check4 = this._formBuilder.group({
      e: ''
    });
  }

  get fee_name() { return this.check1.get('fee_name'); }
  get free_time() { return this.check1.get('free_time'); }
  get new_car_hour() { return this.check1.get('new_car_hour'); }
  get period() { return this.check1.get('period'); }
  get normal_day_interval_1_fee() { return this.check2.get('normal_day_interval_1_fee'); }
  get normal_day_interval_1_fee_start() { return this.check2.get('normal_day_interval_1_fee_start'); }
  get normal_day_interval_1_fee_end() { return this.check2.get('normal_day_interval_1_fee_end'); }
  get normal_day_interval_2_fee() { return this.check2.get('normal_day_interval_2_fee'); }
  get normal_day_interval_2_fee_start() { return this.check2.get('normal_day_interval_2_fee_start'); }
  get normal_day_interval_2_fee_end() { return this.check2.get('normal_day_interval_2_fee_end'); }
  get holiday_day_interval_1_fee() { return this.check3.get('holiday_day_interval_1_fee'); }
  get holiday_day_interval_1_fee_start() { return this.check3.get('holiday_day_interval_1_fee_start'); }
  get holiday_day_interval_1_fee_end() { return this.check3.get('holiday_day_interval_1_fee_end'); }
  get holiday_day_interval_2_fee() { return this.check3.get('holiday_day_interval_2_fee'); }
  get holiday_day_interval_2_fee_start() { return this.check3.get('holiday_day_interval_2_fee_start'); }
  get holiday_day_interval_2_fee_end() { return this.check3.get('holiday_day_interval_2_fee_end'); }

  handlePeriodAndNewCarHour(mode: string) {
    if (mode === '0') {
      // 全時段小時計費
      this.feeRule.new_car_hour = 0;
      this.feeRule.period = 60;
    } else if (mode === '1') {
      // 全時段小時計費
      this.feeRule.new_car_hour = 0;
      this.feeRule.period = 30;
    }
  }

  handleFreeTime(mode: number) {
    if (mode === 1) {
      this.free_mode = -this.free_mode;
    }
  }

  onCommit() {
    this.validatorStatus = this.check1.valid && this.check2.valid && this.check3.valid && this.check4.valid;
    if (this.validatorStatus) {
      // console.log('符合條件');
      this.handlePeriodAndNewCarHour(this.hourMode);
      this.handleFreeTime(this.free_mode);
      if (this.feeRadioButtonGroup.special_mode !== '0') {
        this.feePara1[this.feeRadioButtonGroup.special_mode] = this.feeRadioButtonGroup.special_mode_value;
      }
      if (this.feeRadioButtonGroup.special_mode2 !== '0') {
        this.feePara2[this.feeRadioButtonGroup.special_mode2] = this.feeRadioButtonGroup.special_mode_value2;
      }
      this.Commit.emit();
    } else {
      // console.log('有東西沒輸入');
    }
  }
}
