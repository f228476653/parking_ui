export class CustomerDevice {
    customer_ibox_args_id: number;
    market_code: string;
    cashier_no: string;
    system_id: string;
    comp_id: string;
    machine;
    ipass_water_lv_host;
    ipass_water_lv_port;
    socket_ip;
    transaction_system_id;
    loc_id;
    transaction_terminal_no;
    tid;
    mid;
    YHDP_water_lv;
    YHDP_water_lv_host;
    YHDP_water_lv_port;
    nii: string;
    host_ip = '54.214.198.230';
    host_port = '21';
    host_user = 'pms_plus';
    host_pwd = '@@123qwe';
    customer_id: number;
}

export class CustomerMapCardCase {
    customer_map_card_case_id: number;
    device_type: string;
    enable_card_case: number;
    customer_id: number;
}
