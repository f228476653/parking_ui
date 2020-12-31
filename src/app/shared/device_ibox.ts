export class DeviceIbox {
    device_ibox_args_id: number;
    device_name: string;
    type = 'c';
    external_ip: string;
    station_inout = 2;
    // ECC = false;
    // iPass = false;
    // iCash = false;
    // YHDP = false;
    ip: string;
    gateway: string;
    eid_pos_no: '346Z';
    card_order: string;
    garage_id: number;
    client_pv: string;
    time_sync_period: number;
    pos_no: string;
    slot1 = 0;
    slot2 = 0;
    slot3 = 0;
    slot4 = 0;
}

export class SlotData {
    slot1 = 'None';
    slot2 = 'None';
    slot3 = 'None';
    slot4 = 'None';
}
