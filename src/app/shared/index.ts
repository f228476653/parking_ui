export * from './auth.guard';
export * from './user';
export * from './role';
export * from './permission';
export * from './customer';
export * from './entry-gate';
export * from './api-response';
export * from './accounting-report';
export * from './data-mode';
export * from './keystore-status-enum';
export * from './keystore-validation-enum';
export * from './keystore';
export * from './map-role-permission';
export * from './page-mode';
export * from './password';
export * from './garage';
export * from './session-storage';
export * from './map-garage-to-garage-group';
export * from './garage-group';
export * from './generic_enum';
export * from './instant';
export * from './garage-exit';
export * from './report-query';
export * from './einvoice-config';

export class CheckedDataModel {
    id: number;
    display_name: string;
    description: string;
    checked: boolean;
}

export class  MapGarageToGarageGroup {
    garage_id: number;
    garage_group_id: number;
    create_date: Date;
    modified_date: Date;
    create_account_id: number;
    modified_account_id: number;
}

export class MapGarageToAccount {
    garage_id: number;
    account_id: number;
}
export class MapGarageGroupToAccount {
    garage_group_id: number;
    account_id: number;
}

export const VehicleType = [
    {name: '汽車', value: 1},
    {name: '機車', value: 2},
    {name: '卡車', value: 3},
    {name: '腳踏車', value: 4},
    {name: '沙石車', value: 5},
    {name: '小貨車', value: 6},
    {name: '休旅車', value: 7},
    {name: '箱型車', value: 8},
    {name: '電動機車', value: 9},
    {name: '電動汽車', value: 10},
    {name: '大客車', value: 11},
    {name: '小巴', value: 12},
    {name: '拖板車', value: 13}
  ];

  export const DeviceType = [
    {name: 'PV3', value: 1},
    {name: 'iBox', value: 4},
    {name: '平板', value: 3}
  ];

export class MenuPermission {
    static getPermission() {
        return [
            {'id': 1, 'name': '維運管理', 'menu_key': 'operation-management'}
            , {'id': 2, 'name': '帳號管理', 'menu_key': 'account'}
            , {'id': 11, 'name': '角色管理', 'menu_key': 'role'}
            , {'id': 21, 'name': '客戶管理', 'menu_key': 'customer'}
            , {'id': 31, 'name': '場站管理', 'menu_key': 'garage'}
            , {'id': 81, 'name': '發票設定管理', 'menu_key': 'invoice-setting'}
            , {'id': 91, 'name': '出場設定管理', 'menu_key': 'garage-exit-setting'}
            , {'id': 101, 'name': '車道設定管理', 'menu_key': 'driveway'}
            , {'id': 111, 'name': '場站群組管理功能', 'menu_key': 'garage-group'}
            , {'id': 121, 'name': '授權金鑰管理', 'menu_key': 'key'}
            , {'id': 131, 'name': '帳務管理群組', 'menu_key': 'accounting-management'}
            , {'id': 132, 'name': '帳務查詢功能', 'menu_key': 'accounting-report'}
            , {'id': 141, 'name': 'PV即時交易資料查詢功能', 'menu_key': 'instant-transaction-report'}
            , {'id': 142, 'name': 'PV3即時交易資料查詢功能', 'menu_key': 'instant-transaction-report-pmsplus'}
            , {'id': 143, 'name': '平板即時交易資料查詢功能', 'menu_key': 'instant-transaction-report-pad'}
            , {'id': 144, 'name': 'IBox即時交易資料查詢功能', 'menu_key': 'instant-transaction-report-ibox'}
            , {'id': 151, 'name': '儀表板群組', 'menu_key': 'dashboard'}
            , {'id': 152, 'name': '資源分析', 'menu_key': 'dashboard-resource-main'}
            , {'id': 153, 'name': '營收分析', 'menu_key': 'revenue-analysis'}
            , {'id': 154, 'name': '交易分析', 'menu_key': 'transaction-main'}
            , {'id': 161, 'name': '計費設定管理', 'menu_key': ''}
            , {'id': 181, 'name': '報表群組', 'menu_key': 'regularly-report'}
            , {'id': 182, 'name': '結班報表', 'menu_key': 'shift-checkout-report'}
        ];
    }
}

export class CardType {
    iCash: boolean;
    iPass: boolean;
    YHDP: boolean;
    constructor() {
        this.iCash = false;
        this.iPass = false;
        this.YHDP = false;
    }
}

export class EinvoiceProvider {
    taiwanparking: boolean;
    dingten: boolean;
    smartpay: boolean;
    shiuanyang: boolean;
}

export class RegPattern {
    IPV4 = '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.)' +
    '{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';
    multipleIPV4 = '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.)' +
    '{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(,(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.)' +
    '{3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$';
    match_TW_ZH_Number = '^[\\u4e00-\\u9fa5_a-zA-Z0-9]+$';
    // match 1~24
    hour24 = '^(?:[0-1]?[0-9]|2[0-4])$';
    // 1 ~ 65535
    port = '^(6553[0-5]|655[0-2][0-9]\\d|65[0-4](\\d){2}|6[0-4](\\d){3}|[1-5](\\d){4}|[1-9](\\d){0,3})$';
    onlyNumber = '^[\\d]+$';
    withoutComma = '^[^,]*$';
    withoutSpaceAndComma = '^[^,\\s]+$';
}
