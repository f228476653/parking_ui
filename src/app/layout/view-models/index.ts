import { PageData, Garage } from '../../shared';
import { TimeFormat } from '../../../../node_modules/angular5-time-picker';

export class PageQuery {
    card_id16;
    card_id;
    vehicle_type;
    pv_in;
    pv_out;
    paid_type;
    enter_time_begin;
    enter_time_end;
    paid_time_begin;
    vehicle_identification_number; // 車牌
    paid_time_end;
    exit_time_end;
    exit_time_begin;
    real_fee: number;
    invoice_number;
    disablitiy_type;
    garage_code;
    garage_id;
    invoice_check;
    transfer_discount; // 轉乘優惠
    exit_type_config_detail_name; // 出場理由
    create_user_name; // 管理員
    garage_group_id;
    device_type; // 0:未知,1:pv3,2:pv,3:pad,4:ibox,5:abs, 6: rspms_zone
    abnormal ; // 異常交易
  }

  export class RSPMSInstantTransactionQuery {
    enter_datetime: string;
    exit_datetime: string;
    parking_type: string;
    paid_type: string;
    card_no: string;
    zone: number;
  }

  export class DateQuery {
    date: Date;
    time: string;
    hour: number;
    min: number;
    second: number;
  }

  export class DatetimeCompound {
    date: Date;
    time: string;
    hour: number;
    min: number;
    sec: number;
  }

  export class Query {
    garage_code = '';
    start_date = '';
    end_date = '';
    has_diff = false;
    paid_type = '01';
    file_name = '';
  }


export interface Element {
    exit_config_id: number;
    garage_code: number;
    garage_name: string;
    description: string;
    exit_type: string[];
    disabled: number;
  }

  export class ElsaData<T, U> {
    page_data: PageData<T, U>;
    garage: Garage;
    exit_type: string;
  }
