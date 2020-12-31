export class EinvoiceConfig {
    e_invoice_config_id: number; // '流水號',
    tax_id: string; // '賣方統編',
    qrcode_encrypt_key: string;  // '產生QR code的AES KEY',
    txn_file_generate_flag: number;  // '是否產生/更新交易檔案(0:否, 1:是)',
    txn_file_upload_interval: number;  // '產生/更新交易檔案時間間隔',
    txn_file_import_folder: string;   // '取號檔路徑',
    txn_file_upload_folder: string;   // '產生/更新交易檔案預設路徑',
    txn_file_backup_folder: string;  // '產生/更新交易檔案備份路徑',
    api_txn_upload_url: string;    // '交易檔案上傳網址',
    api_txn_upload_key: string;    // '交易檔案上傳ＫＥＹ',
    api_get_number_url: string;     // '取號下載網址',
    api_get_number_key: string;     // '取號下載ＫＥＹ',
    ftp_upload_address: string;   // '上傳發票交易交易檔主機',
    ftp_upload_port: string;  // '上傳發票交易ftp port',
    ftp_upload_login_account: string;   // 'ftp帳號',
    ftp_upload_login_pwd: string;   // 'ftp密碼',
    ftp_upload_path: string;   // 'ftp updateload path',
    customer_id: number;
    is_used: number;   // '是否使用' ,
    einvoice_company: string;
    get_number_setting: number;
    txn_file_upload_setting: number;
    get_number_via: number; // 如何取號(0:API/1:FTP)
    txn_file_upload_via: number; // 如何上傳發票交易檔(0:API/1:FTP)
    ftp_get_number_address: string;
    ftp_get_number_port: number;
    ftp_get_number_login_account: string;
    ftp_get_number_login_pwd: string;
    ftp_get_number_down_path: string;
    web_url: string;
    web_api_key: string;
}

export enum einvoiceCompany_type {
    taiwanparking = '3',
    smartpay = '1',
    dingten = '2',
    shiuanyang = '4'
}

