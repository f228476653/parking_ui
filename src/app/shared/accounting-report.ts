export class AccountingReport {
    garage_code: string;
    format_date: string;
    pms_cnt: number;
    pms_fee: number;
    cps_cnt: number;
    cps_fee: number;
}
export class PmsDiffRecords {
    id: string;
    card_no: string;
    paid_time: string;
    trx_amt: string;
}
export class DetailQuery {
    query_date: string;
    paid_type: string;
    file_name: string;
    garage_code: string;
}
export class RecordsAfterHumenClose {
    query_date: string;
    paid_type: string;
    file_name: string;
    garage_code: string;
}
export class AmtDiffRecords {
    query_date: string;
    paid_type: string;
    file_name: string;
    garage_code: string;
}
export class CpsDiffRecords {
    query_date: string;
    paid_type: string;
    file_name: string;
    garage_code: string;
}
export class ParkingSettlementRecords {
    query_date: string;
    paid_type: string;
    file_name: string;
    garage_code: string;
}
