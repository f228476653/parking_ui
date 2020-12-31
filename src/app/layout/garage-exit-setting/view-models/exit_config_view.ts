export class ExitConfigView {
    garage_id;
    garage_code;
    garage_name;
    exit_config_id;
    description;
    exit_type_context = '';
    exit_type: ExitConfigDetail[];
    disabled;
}

export class ExitConfigDetail {
    exit_type_config_detail_id;
    exit_type;
    exit_type_disabled;
}
