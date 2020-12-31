import { Component, OnInit } from '@angular/core';
import { ReportQuery, DayRevenue } from '../../../shared/index';
import { RegularlyReportsService } from '../../../services/regularly-reports.service';
import { DayRevenueReport } from '../view/report-view';
import { DatePipe } from '@angular/common';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-monthly-revenue-report',
  templateUrl: './monthly-revenue-report.component.html',
  styleUrls: ['./monthly-revenue-report.component.css']
})
export class MonthlyRevenueReportComponent implements OnInit {
  csvOptions: {};

  constructor(public regularlyReportsService: RegularlyReportsService) { }
  query: ReportQuery = new ReportQuery();
  fee_cnt = [];
  subtotal = [];
  day_revenue_sum_type = [];
  dayRevenueReport = new DayRevenueReport();
  displayedColumns: string[] = ['unitPrice1', 'cnt1', 'subtotal1', 'unitPrice2', 'cnt2', 'subtotal2',
  'unitPrice3', 'cnt3', 'subtotal3', 'unitPrice4', 'cnt4', 'subtotal4'];
  displayedColumns3: string[] = [ 'unitPrice1', 'subtotal4'];
  title_card_type = [];
  report_column: string[];
  display = false;
  total: number;
  dateNow;
  datePipe: DatePipe;
  report_data = {};
  superData = [];
  mode;
  query_format_month: string;
  s1 = [];
  a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  ngOnInit() {
    const date = new DatePipe('zh-TW');
    this.dateNow = date.transform(Date.now(), 'yyyy-MM-dd');
  }

  onSerch(e) {
    this.report_data = {};
    this.query = e;
    this.datePipe = new DatePipe('zh-TW');
    this.query_format_month = this.datePipe.transform(this.query.query_date, 'yyyy-MM');
    this.regularlyReportsService.get_monthly_revenue_report(this.query.garage_code, this.query_format_month,
      this.query.paid_type).subscribe(response => {
      // console.log(response.data);
      const month_day = this.get_date(this.query_format_month);
      if (response.data.hasOwnProperty('paid_type_c')) {
        // 代表所選單一卡種
        this.mode = 'solo';
        this.title_card_type = ['title_date', 'paid_type', 'title_total'];
        this.report_column = ['date', 'cnt_c', 'total_c', 'cnt_m', 'total_m', 'total'];
        this.report_data['paid_type_c'] = this.combine_data(month_day, response.data['paid_type_c'], this.query_format_month);
        this.report_data['paid_type_m'] = this.combine_data(month_day, response.data['paid_type_m'], this.query_format_month);
        this.superData = this.super_data(this.report_data, 'solo');
      } else {
        // 代表全部
        this.mode = 'all';
        this.report_column = ['date', 'icash_cnt_c', 'icash_total_c', 'icash_cnt_m', 'icash_total_m', 'icash_total',
        'ipass_cnt_c', 'ipass_total_c', 'ipass_cnt_m', 'ipass_total_m', 'ipass_total',
        'yhdp_cnt_c', 'yhdp_total_c', 'yhdp_cnt_m', 'yhdp_total_m', 'yhdp_total',
        'cash_cnt_c', 'cash_total_c', 'cash_cnt_m', 'cash_total_m', 'cash_total', 'total'];
        this.report_data['cash_c'] = this.combine_data(month_day, response.data['cash_c'], this.query_format_month);
        this.report_data['cash_m'] = this.combine_data(month_day, response.data['cash_m'], this.query_format_month);
        this.report_data['icash_c'] = this.combine_data(month_day, response.data['icash_c'], this.query_format_month);
        this.report_data['icash_m'] = this.combine_data(month_day, response.data['icash_m'], this.query_format_month);
        this.report_data['ipass_c'] = this.combine_data(month_day, response.data['ipass_c'], this.query_format_month);
        this.report_data['ipass_m'] = this.combine_data(month_day, response.data['ipass_m'], this.query_format_month);
        this.report_data['yhdp_c'] = this.combine_data(month_day, response.data['yhdp_c'], this.query_format_month);
        this.report_data['yhdp_m'] = this.combine_data(month_day, response.data['yhdp_m'], this.query_format_month);
        this.superData = this.super_data(this.report_data, 'all');
        // console.log(this.superData);
      }
      this.display = true;
     });
  }

  getTotalCost() {
    return this.superData.map(t => {
      return t.total_c + t.total_m;
    }).reduce((acc, value) => acc + value, 0);
  }

  super_data(data, type: string) {
    const super_data = [];
    if (type === 'solo') {
      for (let i = 0; i < data['paid_type_c']['allDate'].length; i ++) {
        const total = data['paid_type_c']['subtotal_data'][i] + data['paid_type_m']['subtotal_data'][i];
        super_data.push({'date': data['paid_type_c']['allDate'][i], 'cnt_c': data['paid_type_c']['cnt_data'][i],
        'total_c': data['paid_type_c']['subtotal_data'][i], 'cnt_m': data['paid_type_m']['cnt_data'][i],
        'total_m': data['paid_type_m']['subtotal_data'][i], 'total': total});
      }
    } else if (type === 'all') {
      for (let i = 0; i < data['cash_c']['allDate'].length; i ++) {
        const cash_total = data['cash_c']['subtotal_data'][i] + data['cash_m']['subtotal_data'][i];
        const icash_total = data['icash_c']['subtotal_data'][i] + data['icash_m']['subtotal_data'][i];
        const ipass_total = data['ipass_c']['subtotal_data'][i] + data['ipass_m']['subtotal_data'][i];
        const yhdp_total = data['yhdp_c']['subtotal_data'][i] + data['yhdp_m']['subtotal_data'][i];
        const total = cash_total + icash_total + ipass_total + yhdp_total;
        super_data.push({'date': data['cash_c']['allDate'][i], 'icash_cnt_c': data['icash_c']['cnt_data'][i],
        'icash_total_c': data['icash_c']['subtotal_data'][i], 'icash_cnt_m': data['icash_m']['cnt_data'][i],
        'icash_total_m': data['icash_m']['subtotal_data'][i], 'icash_total': icash_total,
        'ipass_cnt_c': data['ipass_c']['cnt_data'][i], 'ipass_total_c': data['ipass_c']['subtotal_data'][i],
        'ipass_cnt_m': data['ipass_m']['cnt_data'][i], 'ipass_total_m': data['ipass_m']['subtotal_data'][i],
        'ipass_total': ipass_total, 'yhdp_cnt_c': data['yhdp_c']['cnt_data'][i],
        'yhdp_total_c': data['yhdp_c']['subtotal_data'][i], 'yhdp_cnt_m': data['yhdp_m']['cnt_data'][i],
        'yhdp_total_m': data['yhdp_m']['subtotal_data'][i], 'yhdp_total': yhdp_total, 'cash_cnt_c': data['cash_c']['cnt_data'][i],
        'cash_total_c': data['cash_c']['subtotal_data'][i], 'cash_cnt_m': data['cash_m']['cnt_data'][i],
        'cash_total_m': data['cash_m']['subtotal_data'][i], 'cash_total': cash_total, 'total': total});
      }
    }
    return super_data;
  }

  combine_data(month_day, paid_type_data, query_format_month) {
    // 組出當月資料
    const cnt_data = [];
    const subtotal_data = [];
    const allDate = [];
    let flag = 0;
    const len = paid_type_data.length;
    let total_cnt_data = 0;
    let total_subtotal_data = 0;
    for (let i = 0; i < month_day; i ++) {
      allDate.push(query_format_month + '-' + (i + 1));
      if ( flag < len && i + 1 === parseInt(paid_type_data[flag]['parking_date'].slice(8), 10)) {
        total_cnt_data += parseInt(paid_type_data[flag]['total_cnt'], 10);
        total_subtotal_data += parseInt(paid_type_data[flag]['total'], 10);
        cnt_data.push(parseInt(paid_type_data[flag]['total_cnt'], 10));
        subtotal_data.push(parseInt(paid_type_data[flag]['total'], 10));
        flag++;
      } else {
        cnt_data.push(0);
        subtotal_data.push(0);
      }
    }
    cnt_data.push(total_cnt_data);
    subtotal_data.push(total_subtotal_data);
    allDate.push('小計');
    return {'cnt_data': cnt_data, 'subtotal_data': subtotal_data, 'allDate': allDate};
  }

  get_date(the_month: string) {
    const month = parseInt(the_month.slice(5), 10);
    const year = parseInt(the_month.slice(0, 4), 10);
    const day = new Date(year, month, 0);
    return day.getDate();
  }

  get_cnt_subtotal(data: DayRevenue[], start, count) {
    // 這邊負責把資料 組成陣列 給表格
    const z = [];
    const c = data.map(r => r.fee);
    for (let i = start; i < 115 * count; i += 5) {
      const index = c.indexOf(i);
      if ( index !== -1) {
        z.push({'unitPrice': i, 'cnt': data[index]['cnt'], 'subtotal': data[index]['subtotal']});
      } else {
        z.push({'unitPrice': i, 'cnt': 0, 'subtotal': 0});
      }
    }
    return z;
  }

  csvExport() {
    let headers = [];
    if (this.mode === 'solo') {
      headers = ['日期', '汽車筆數', '汽車金額', '機車筆數', '機車金額', '金額總計'];
    } else if (this.mode === 'all') {
      headers = ['日期', '愛金卡 汽車筆數', '愛金卡 汽車金額', '愛金卡 機車筆數', '愛金卡 機車金額', '愛金卡 小計',
      '一卡通 汽車筆數', '一卡通 汽車金額', '一卡通 機車筆數', '一卡通 機車金額', '一卡通 小計',
      '有錢卡 汽車筆數', '有錢卡 汽車金額', '有錢卡 機車筆數', '有錢卡 機車金額', '有錢卡 小計',
      '人工結帳 汽車筆數', '人工結帳 汽車金額', '人工結帳 機車筆數', '人工結帳 機車金額', '人工結帳 小計', '金額總計'];
    }
    const title = 'PMS營運統計報表系統' + this.query.company_name + '-' + this.query.garage_name
    + '【' + this.query.paid_type_name + '】';
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: title,
      useBom: true,
      noDownload: false,
      headers: headers
    };

    const c = new Angular5Csv(this.superData, this.query_format_month + '月報表', options);
  }

  pdfExport() {
    //
  }

}
