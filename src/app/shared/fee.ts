
export class PircingRule {
    feePrimaryTable: FeePrimaryTable;
    costNormalRule1: CostNormalRule;
    costNormalRule2: CostNormalRule;
    costSpecialRule1: CostSpecialRule;
    costSpecialRule2: CostSpecialRule;
}

export class PricingRuleListView {
    customer_id: number;
    fee_primary_table_id: number;
    fee_name: string;
    introduction: string;
    status: string;
    update_time: Date;
    update_user: string;
}

export class FeePrimaryTable {
    fee_primary_table_id: number;
    fee_name: string;
    introduction: string;
    normal: string;
    holiday: string;
    count: number;
    update_time: Date;
    update_user: string;
}

export class CostNormalRule {
    cost_normal_rule_id: number;
    cost_normal_rule_day_type: number;
    mode: number;
    mode_method: string;
    mode_time: string;
    max_fee: string;
    max_fee_time: string;
    free_time: string;
    loop_mode: string;
    first_period_total: string;
    first_period: string;
    first_period_fee: string;
    second_period_total: string;
    second_period: string;
    second_period_fee: string;
    third_period_total: string;
    third_period: string;
    third_period_fee: string;
    interval_1_fee_time_start: string;
    interval_1_fee_time_end: string;
    interval_1_period: string;
    interval_1_fee: string;
    interval_1_end_method: string;
    interval_2_fee_time_start: string;
    interval_2_fee_time_end: string;
    interval_2_period: string;
    interval_2_fee: string;
    interval_2_end_method: string;
    interval_3_other_period: string;
    interval_3_fee: string;
    interval_3_end_method: string;
    update_time: Date;
    update_user: string;
    fee_primary_table_id: number;
}

export class CostSpecialRule {
    cost_special_rule_id: number;
    cost_special_rule_day_type: number;
    on_off_1: number;
    mode_method_1: string;
    start_time_1: string;
    end_time_1: string;
    max_fee_1: string;
    free_time_1: string;
    first_period_total_1: string;
    first_period_1: string;
    first_period_fee_1: string;
    second_period_total_1: string;
    second_period_1: string;
    second_period_fee_1: string;
    third_period_total_1: string;
    third_period_1: string;
    third_period_fee_1: string;
    on_off_2: string;
    mode_method_2: string;
    start_time_2: string;
    end_time_2: string;
    max_fee_2: string;
    free_time_2: string;
    first_period_total_2: string;
    first_period_2: string;
    first_period_fee_2: string;
    second_period_total_2: string;
    second_period_2: string;
    second_period_fee_2: string;
    third_period_total_2: string;
    third_period_2: string;
    third_period_fee_2: string;
    update_time: Date;
    update_user: string;
    fee_primary_table_id: number;
}

export class FeeRule {
    fee_rule_id: number;
    new_car_hour: number;
    period: number;
    normal_day: string;
    holiday: string;
    free_time: number;
    fee_mode: number;
    update_time: Date;
    update_user: string;
    car_type: string;
    fee_args_name: string;
    garage_id: number;
    constructor() {
        this.free_time = 0;
        this.fee_mode = 0;
        this.new_car_hour = 0;
        this.period = 60;
    }
}

export class FeePara {
    fee_para_id: number;
    fee_para_mode: string;
    hour_period_fee1: string;
    hour_period_fee1_start: string;
    hour_period_fee1_end: string;
    hour_period_fee2: string;
    hour_period_fee2_start: string;
    hour_period_fee2_end: string;
    max_fee: string;
    max_hour: string;
    special_rule: string;
    special_fee_start: string;
    special_fee_end: string;
    special_fee_max: string;
    special_fee_hour: string;
    monthly_pass: string;
    update_time: Date;
    update_user: string;
    fee_rule_id: number;
    constructor() {
        this.max_fee = '99999';
        this.max_hour = '25';
        this.monthly_pass = '0';
        this.special_rule = '0';
        this.special_fee_start = '0';
        this.special_fee_end = '0';
        this.special_fee_max = '99999';
        this.special_fee_hour = '25';
    }
}

export class FeeRadioButtonGroup {
    mode = 1;
    free_mode = 0;
    hourMode = 0;
    normal_mode: number;
    holiday_mode: number;
    special_mode = 'disable';
    special_mode2 = 'disable';
    special_mode_value: number;
    special_mode_value2: number;
    special_max_mode: number;
}

export class Annotation {
    fee_mode =
    '計費模式\
        當日最高計費模式：每日 00:00:00 後，已付費時段用完後，進入另一個計費循環\
        24 小時最高計費模式：進場後滿24小時，進入另一個計費循環\
        12 小時最高計費模式：進場後滿12小時，進入另一個計費循環\
      計次\
        單次收費模式 : 進出場一次，不論停留時間長短，就是收單一金額\
        單次收費模式：以每日00:00:00為斷點，重新收取一次費用\
                     以進場24小時為一斷點，重新收取一次費用\
                     以進場12小時為一計費區間，重新收取一次費用';
    special_mode =
        '截尾模式: 當金額達到該區間最大值、或最大時數，特殊費率設定結束時間，即為下個計費區間開始時間 /n' +
        '推遲模式: 以一個時間區間為一個單位時間，該單位的初始時間，決定用何種費率，必須要等到該單位時間用完，才跳下個單位時間費率';
}
