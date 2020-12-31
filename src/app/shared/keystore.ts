import { KeystoreStatusEnum } from './keystore-status-enum';

export class Keystore {
    keystore_id: number;
    create_date: Date;
    modified_date: Date;
    create_account_id: number;
    modified_account_id: number;
    customer_id: number;
    key_version: string;
    key_type: string;
    fixed_account_total: number;
    dynamic_account_total: number;
    key_manager_email: string;
    service_type: string;
    note: string;
    key_value: string;
    start_date: Date;
    end_date: Date;
    key_status: KeystoreStatusEnum;
    key_string: string;
}
