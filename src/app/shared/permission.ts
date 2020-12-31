export class Permission {
    permission_id: number;
    name: string;
    description: string;
    permission_type: string;
    parent_id: number;
    create_date: Date;
    modified_date: Date;
    create_account_id: number;
    modified_account_id: number;
    checked: boolean;
}
