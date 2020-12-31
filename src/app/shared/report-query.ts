
export class ReportQuery {
  // device_pv_id: number;
  garage_id: number;
  garage_code: string;
  garage_name: string;
  customer_id: number;
  company_name: string;
  query_date: Date;
  query_to_date: string;
  report_type: string;
  garage_group_id: number;
  paid_type: string;
  paid_type_name: string;
}

export class DayRevenue {
  fee: number;
  subtotal: string;
  cnt: number;
}
