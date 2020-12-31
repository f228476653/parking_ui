import { MapGarageToGarageGroup } from './index';

export class GarageGroup {
    garage_group_id: number;
    garage_group_name: string;
    customer_id: number;
    description: string;
    create_date: Date;
    modified_date: Date;
    create_account_id: number;
    modified_account_id: number;
    parent_id: number;
    map_garage_to_garage_group: MapGarageToGarageGroup[];
    company_name: string;
    /** custom property */
    checked: boolean;
}
