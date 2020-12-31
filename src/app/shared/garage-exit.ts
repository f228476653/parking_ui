import { MapGarageToGarageGroup } from './index';

export class GarageExit {
    garage_code: string;
    exit_config_id: number;
    disabled: boolean;
    garage_id: number;
    garage_name: string;
    description: string;
    exit_type: string;
    exit_type_detail: string[];
    map_garage_to_garage_group: MapGarageToGarageGroup[];
}
