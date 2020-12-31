export class User {
    account_id: number;
    account: string;
    customer_id: number;
    user_first_name: string;
    user_middle_name: string;
    user_last_name: string;
    email: string;
    mobile: string;
    role_id: number;
    is_superuser = false;
    is_customer_root = false;
    create_date: Date;
    modified_date: Date;
    create_account_id: number;
    modified_account_id: number;
    password: string;
    modified_date_unix: number;
    create_date_unix: number;
    company_name: string;
}

