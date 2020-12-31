import { GarageService } from '../services';
import { Directive, Input } from '@angular/core';
import { AsyncValidatorFn, AsyncValidator, NG_ASYNC_VALIDATORS, AbstractControl,
  ValidationErrors, ValidatorFn, NG_VALIDATORS, Validator } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DeviceService } from '../services/device.service';

export function isDuplicateIPValidator(serviceMethod: DeviceService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    // TODO 解決:現階段每次輸入都會送出事件 銀幕頻繁loading狀況
    // 解決方案 使用debounce延遲事件 ex:500ms 沒有輸入才呼叫api
    const ip = control.get('ip').value;
    const garage_id = control.get('garage_id').value;
    return serviceMethod.is_duplicate_ip_from_same_garage(garage_id, ip).map(
      isExist => {
          return isExist.data ? {'duplicateIP': true} : null;
      }
    );
  };
}
@Directive({
  selector: '[appIsDuplicateIP][formControlName],[isDuplicateIP][formControl],[IsDuplicateIP][ngModel]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: IsDuplicateIPValidatorDirective, multi: true}]
})
export class IsDuplicateIPValidatorDirective implements AsyncValidator {
  constructor(private serviceMethod: DeviceService) {  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // console.log('開始驗證');
     return isDuplicateIPValidator(this.serviceMethod)(control);
  }
}

export function isGarageCodeExistValidator(serviceMethod: GarageService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    // TODO 解決:現階段每次輸入都會送出事件 銀幕頻繁loading狀況
    // 解決方案 使用debounce延遲事件 ex:500ms 沒有輸入才呼叫api
    return serviceMethod.isGarageCodeExist(control.value).map(
      isExist => {
          return isExist.data ? {'garageCodeExists': true} : null;
      }
    );
  };
}
@Directive({
  selector: '[appIsGarageCodeExists][formControlName],[isGarageCodeExists][formControl],[IsGarageCodeExists][ngModel]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: IsGarageCodeExistValidatorDirective, multi: true}]
})
export class IsGarageCodeExistValidatorDirective implements AsyncValidator {
  constructor(private serviceMethod: GarageService) {  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // console.log('開始驗證');
     return isGarageCodeExistValidator(this.serviceMethod)(control);
  }
}

/* 統編驗證器
  規則
  8碼數字加權後 個位數及十位數相加
  總和 % 10 == 0 or ( (總和+1) % 10 == 0 && 統編第7碼為7)
*/
export function taxNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    // null 代表通過
    const value: string = control.value;
    // 預防init時沒值出現error
    if (value == null) {
      return {'taxNumber': {value: control.value}};
    }
    const len = value.length;
    if (value.length !== 8) {
      return {'taxNumber': {value: control.value}};
    }
    const weighting = [1, 2, 1, 2, 1, 2, 4, 1];
    let ones_digit = 0;
    let tens_digit = 0;
    let total = 0;
    for (let i = 0; i < len; i++) {
      const weightingResult = parseInt(value[i], 10) * weighting[i];
      if ( weightingResult >= 10) {
        tens_digit += Math.floor(weightingResult / 10);
        ones_digit += weightingResult % 10;
      } else {
        ones_digit += weightingResult;
      }
    }
    total = ones_digit + tens_digit;
    const result =  true ? (total % 10 === 0) : ((total + 1) % 10 === 0 && value[6] === '7');
    return result ? null : {'taxNumber': {value: control.value}};
  };
}

@Directive({
  selector: '[appTaxNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: TaxNumberValidatorDirective, multi: false}]
})
export class TaxNumberValidatorDirective implements Validator {
  @Input() taxNumber: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.taxNumber ? taxNumberValidator()(control) : null;
  }
}

// 驗證群組是否相等
export function equalValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    // console.log('比較中...');
    // console.log(control);
    return true ? null : {'equal': {value: control.value}};
  };
}

@Directive({
  selector: '[appEqual]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: false}]
})
export class EqualValidatorDirective implements Validator {
  @Input() equal: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.equal ? equalValidator()(control) : null;
  }
}

/* 字元長度驗證器
  輸入字元長度最大限制，
  中文字：2，英數字：1
*/
export function characterLengthValidator(max_length): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    // null 代表通過
    const value: string = control.value;
    // 預防init時沒值出現error
    if (value == null) {
      return {'characterLength': {value: control.value}};
    }
    const len = value.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      // 判斷中文字
      if(value[i].match('[\u4e00-\u9fa5]')) {
        count = count + 2;
      }
      else if(value[i].match('[A-Za-z0-9_\-\~]')){
        count = count + 1;
      }
      else{
        const result =  false;
        return result ? null : {'characterLength': {value: control.value}};
      }
    }
    if(count > max_length){
      const result =  false;
      return result ? null : {'characterLength': {value: control.value}};
    }
    else{
      const result =  true;
      return result ? null : {'characterLength': {value: control.value}};
    }
    
  };
}

@Directive({
  selector: '[appCharacterLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: CharacterLengthValidatorDirective, multi: false}]
})
export class CharacterLengthValidatorDirective implements Validator {
  @Input() characterLength: string;
  @Input() max_length: number;
  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.characterLength ? characterLengthValidator(this.max_length)(control) : null;
  }
}