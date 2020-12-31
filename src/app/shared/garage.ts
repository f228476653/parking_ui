export class Garage {
    garage_code: string ;
    garage_name: string;
    customer_id: number;
    city_name: string;
    city_code: string;
    district: string;
    district_code: string;
    address1: string;
    address2: string;
    total_capacity: number;
    sedan_capacity: number;
    motocycle_capacity: number;
    sedan_priority_pragnant_capacity: number;
    motocycle_priority_pragnant_capacity: number;
    sedan_priority_disability_capacity: number;
    motocycle_priority_disability_capacity: number;
    garage_lat: string;
    garage_lng: string;
    caculation_time_base_unit = 0;
    supplementary_details: string;
    charge_infomation: string;
    business_hour_begin: string;
    business_hour_end: string;
    number_of_entrance: number;
    number_of_exit: number;
    number_of_driveway_in: number;
    number_of_driveway_out: number;
    management_type: number;
    garage_type: number;
    lot_type: number;
    establish_status: number;
    max_clearance: string;
    on_site_liaison: string;
    on_site_phone: string;
    on_site_email: string;
    on_site_cell_phone: string;
    garage_id: number;
    create_account_id: number;
    customer_garage_id: string;
    /** custom property */
    checked: boolean;
}

