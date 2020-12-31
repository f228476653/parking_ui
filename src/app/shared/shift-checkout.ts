export class ShiftCheckout {
    checkout_no: string;
    data_in_json: string;
    garage_id: string;
    customer_id: number;
    clock_in_time: Date;
    clock_out_time: Date;
    checkout_time: Date;
    checkout_amount: number;
    number_of_vehicles: number;
    create_account_id: number;
    modified_account_id: number;
    query_date_start: string;
    query_date_end: string;
    garage_group_id: string;

    public dataInJson(): any {
        return JSON.parse(this.data_in_json);
    }

}

