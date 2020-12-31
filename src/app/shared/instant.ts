export class Instant {
    id: number;
    pv: string;
    pv_out: string;
    card_id: string;
    card_id16: string;
    type: string;
    garage_code: string;
    enter_time: string;
    exit_time: string;
    fee: number;
    paid_time: string;
    parking_time: string;
    receivable: number;
    timediff: string;
    paid_money: number;
    transfer_discount: string;
    invoice_number: string;
    garage_name: string;
    no: string;
    garage_id: number;
    parking_id: string;
    vehicle_identification_number: string;
    car_type: string;
    pay_datetime: string;
    vehicle_type: number | string;
    real_fee: number;
    exit_type_name: string;
    tax_id_number: string;
    tax_id_number_buyer: string;
    diff_hours: string;
    user_name: string;
    exit_type_config_detail_remarks: string;
    record_status: string;
}

export class RSPMSInstant {
    id: number;
    position_code: string;
    pv_out: string;
    card_no: string;
    enter_time: string;
    exit_time: string;
    duration: number;
    parking_type: string;
    fee: number;
    real_fee: number;
    paid_type: string;
    create_time: string;
    file_name: string;
    garage_code: string;
}
