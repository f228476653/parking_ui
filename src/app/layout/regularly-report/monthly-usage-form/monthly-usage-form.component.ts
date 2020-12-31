import { Component, OnInit } from '@angular/core';
import { ReportQuery } from '../../../shared';
import { DatePipe } from '@angular/common';
import { RegularlyReportsService } from '../../../services/regularly-reports.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-monthly-usage-form',
  templateUrl: './monthly-usage-form.component.html',
  styleUrls: ['./monthly-usage-form.component.css']
})
export class MonthlyUsageFormComponent implements OnInit {
  csvOptions: {};

  constructor(public regularlyReportsService: RegularlyReportsService) { }
  query: ReportQuery = new ReportQuery();
  report_column = ['date', 'hour_00', 'hour_01', 'hour_02', 'hour_03', 'hour_04', 'hour_05',
  'hour_06', 'hour_07', 'hour_08', 'hour_09', 'hour_10', 'hour_11', 'hour_12',
  'hour_13', 'hour_14', 'hour_15', 'hour_16', 'hour_17', 'hour_18', 'hour_19',
  'hour_20', 'hour_21', 'hour_22', 'hour_23', 'total'];
  display = false;
  datePipe: DatePipe;
  query_format_month: string;
  data;
  data_by_hour =  {'hour_00': [], 'hour_01': [], 'hour_02': [], 'hour_03': [], 'hour_04': [], 'hour_05': [],
  'hour_06': [], 'hour_07': [], 'hour_08': [], 'hour_09': [], 'hour_10': [], 'hour_11': [], 'hour_12': [],
  'hour_13': [], 'hour_14': [], 'hour_15': [], 'hour_16': [], 'hour_17': [], 'hour_18': [], 'hour_19': [],
  'hour_20': [], 'hour_21': [], 'hour_22': [], 'hour_23': []};
  result;
  flag = true;
  dateNow: string;
  ngOnInit() {
    const date = new DatePipe('zh-TW');
    this.dateNow = date.transform(Date.now(), 'yyyy-MM-dd');
  }

  // temp_search() {
  //   if (this.flag) {
  //     this.flag = false;
  //   const garage_code  = '12045';
  //   const monthly = '2018-05';
  //   this.regularlyReportsService.get_monthly_usage_report(garage_code, monthly)
  //   .subscribe(response => {
  //     this.data = response.data;
  //     // console.log(this.data);
  //     const data_by_hour = Object.assign({}, this.data_by_hour);
  //     this.sort_data_by_hour(this.data, data_by_hour);
  //     const total_date = this.get_current_date_by_month(monthly);
  //     this.build_data(total_date, data_by_hour);
  //     // console.log(this.data_by_hour);
  //     this.result = this.flat_data(monthly, total_date, data_by_hour);
  //     this.display = true;
  //     this.flag = true;
  //     console.log('釋放鎖');
  //   });
  //   } else {
  //     console.log('正在算 等一下');
  //   }
  // }

  flat_data(monthly, date, data_by_hour) {
    // console.log('現在處理');
    const result = [];
    for (let i = 0; i < date; i++) {
    const template =  {'date': '0', 'hour_00': 0, 'hour_01': 0, 'hour_02': 0, 'hour_03': 0, 'hour_04': 0, 'hour_05': 0,
    'hour_06': 0, 'hour_07': 0, 'hour_08': 0, 'hour_09': 0, 'hour_10': 0, 'hour_11': 0, 'hour_12': 0,
    'hour_13': 0, 'hour_14': 0, 'hour_15': 0, 'hour_16': 0, 'hour_17': 0, 'hour_18': 0, 'hour_19': 0,
    'hour_20': 0, 'hour_21': 0, 'hour_22': 0, 'hour_23': 0, 'total': 0.0};
      template['date'] = monthly + '-' + (i + 1);
      let total = 0;
      for (const j in data_by_hour) {
        // typescript doesn't like forin without if statement
        if (1 === 1) {
          template[j] = data_by_hour[j][i];
          total += data_by_hour[j][i];
        }
      }
      total /= 24;
      template['total'] = parseFloat(total.toFixed(2));
      result.push(template);
    }
    // console.log('final....');
    // console.log(result);
    return result;
  }

  build_data(total_date: number, data_by_hour) {
    const empty_array = this.fill_data(total_date);
    for (const i in data_by_hour) {
      if (data_by_hour[i].length === 0) {
        data_by_hour[i] = empty_array;
      } else {
        data_by_hour[i] = this.process_special_case(data_by_hour[i], total_date);
      }
    }
  }

  process_special_case(data, date) {
    const temp = new Array(date);
    temp.fill(0);
    for (let i = 0; i < data.length; i++) {
      const c = parseInt(data[i]['the_hour'].substr(8, 2), 10) - 1;
      temp[c] = parseFloat(data[i]['car_csum']);
    }
    return temp;
  }

  fill_data(date) {
    const s = new Array(date);
    s.fill(0);
    return s;
  }

  get_current_date_by_month(month: string) {
    const date = new Date(month);
    const m = date.getMonth();
    date.setMonth(m + 1);
    date.setDate(0);
    return date.getDate();
  }

  sort_data_by_hour(data, data_by_hour) {
    for (let i = 0 ; i < data.length ; i++) {
      const key = 'hour_' + data[i]['the_hour'].substr(-2);
      if (key in data_by_hour) {
        data_by_hour[key].push(data[i]);
      }
    }
    // console.log('qqqqqqqqqqqqqqqqq');
    // console.log(this.data_by_hour);
  }

  onSerch(e) {
    this.query = e;
    this.datePipe = new DatePipe('zh-TW');
    this.query_format_month = this.datePipe.transform(this.query.query_date, 'yyyy-MM');
    if (this.flag) {
      this.flag = false;
      const monthly = this.query_format_month;
      this.regularlyReportsService.get_monthly_usage_report(this.query.garage_code, monthly)
      .subscribe(response => {
        this.data = response.data;
        // console.log(this.data);
        const data_by_hour = Object.assign({}, this.data_by_hour);
        this.sort_data_by_hour(this.data, data_by_hour);
        const total_date = this.get_current_date_by_month(monthly);
        this.build_data(total_date, data_by_hour);
        // console.log(this.data_by_hour);
        this.result = this.flat_data(monthly, total_date, data_by_hour);
        this.display = true;
        this.flag = true;
        // console.log('釋放鎖');
    });
    } else {
      // console.log('正在算 等一下');
    }
  }

  csvExport() {
    const data = this.result;
    const title = 'PMS營運統計報表系統' + this.query.company_name + '-' + this.query.garage_name
    + '【' + this.query.paid_type_name + '】';
    this.csvOptions = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: title,
      useBom: true,
      noDownload: false,
      headers: ['日期', '00:00-00:59', '01:00-01:59', '02:00-02:59', '03:00-03:59', '04:00-04:59', '05:00-05:59',
      '06:00-06:59', '07:00-07:59', '08:00-08:59', '09:00-09:59', '10:00-10:59', '11:00-11:59',
      '12:00-12:59', '13:00-13:59', '14:00-14:59', '15:00-15:59', '16:00-16:59', '17:00-17:59',
      '18:00-18:59', '19:00-19:59', '20:00-20:59', '21:00-21:59', '22:00-22:59', '23:00-23:59', '平均']
    };
    const datePipe = new DatePipe('zh-TW');
    const date = new Date();
    const formatDate = datePipe.transform(date, 'yyyy_MM_dd');
    const filename = 'monthly_usage_report_' + formatDate;
    // console.log(filename);
    const c = new Angular5Csv(data, filename, this.csvOptions);
  }


}
