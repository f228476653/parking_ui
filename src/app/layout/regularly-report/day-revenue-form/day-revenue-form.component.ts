import { Component, OnInit } from '@angular/core';
import { ReportQuery, DayRevenue } from '../../../shared/index';
import { RegularlyReportsService } from '../../../services/regularly-reports.service';
import { DayRevenueReport } from '../view/report-view';
import { DatePipe } from '@angular/common';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-day-revenue-form',
  templateUrl: './day-revenue-form.component.html',
  styleUrls: ['./day-revenue-form.component.css']
})
export class DayRevenueFormComponent implements OnInit {
  csvOptions: {};

  constructor(public regularlyReportsService: RegularlyReportsService) { }
  query: ReportQuery = new ReportQuery();
  fee_cnt = [];
  subtotal = [];
  day_revenue_sum_type = [];
  dayRevenueReport = new DayRevenueReport();
  displayedColumns: string[] = ['unitPrice1', 'cnt1', 'subtotal1', 'unitPrice2', 'cnt2', 'subtotal2',
  'unitPrice3', 'cnt3', 'subtotal3', 'unitPrice4', 'cnt4', 'subtotal4'];

  displayedColumns5: string[] = ['unitPrice1', 'subtotal4'];
  display = false;
  total: number;
  dateNow: string;
  datePipe: DatePipe;
  query_format_date: string;
  data;
  s1 = [];
  a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  ngOnInit() {
    const date = new DatePipe('zh-TW');
    this.dateNow = date.transform(Date.now(), 'yyyy-MM-dd');
  }

  onserch(e) {
    // console.log(e);
    this.query = e;
    this.datePipe = new DatePipe('zh-TW');
    this.query_format_date = this.datePipe.transform(this.query.query_date, 'yyyy-MM-dd');
    this.regularlyReportsService.get_daily_revenue_report(this.query.garage_code, this.query_format_date,
      this.query.paid_type).subscribe(response => {
      // console.log(response.data);
      this.data = response.data;
      const data = response.data['day_revenue'];
      this.s1 = this.get_cnt_subtotal(data, 0, 4);
      // console.log(this.s1);
      this.display = true;
      if (response.data['day_revenue_sum'].length === 0 ) {
        this.total = 0;
      } else {
        this.total = response.data['day_revenue_sum'][0]['total'];
      }
     });
  }

  combine_data(data) {
    const superData = [];
    for (let i = 0; i < 23; i ++) {
      superData.push({'r1': data[i].unitPrice, 'r2': data[i].cnt, 'r3': data[i].subtotal,
      'r4': data[23 + i].unitPrice, 'r5': data[23 + i].cnt, 'r6': data[23 + i].subtotal,
      'r7': data[46 + i].unitPrice, 'r8': data[46 + i].cnt, 'r9': data[46 + i].subtotal,
      'r10': data[69 + i].unitPrice, 'r11': data[69 + i].cnt, 'r12': data[69 + i].subtotal});
    }
    superData.push({'r1': '營收總計', 'r2': this.total});
    // console.log('view');
    // console.log(superData);
    return superData;
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
    // console.log(z.length);
    return z;
  }

  csvExport() {
    const data = this.combine_data(this.s1);
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
      headers: ['單價', '筆數', '金額', '單價', '筆數', '金額', '單價', '筆數', '金額', '單價', '筆數', '金額']
    };
    const datePipe = new DatePipe('zh-TW');
    const date = new Date();
    const formatDate = datePipe.transform(date, 'yyyy_MM_dd');
    const filename = 'daily_revenue_report_' + formatDate + '_' + this.query.paid_type_name + '交易';
    // console.log(filename);
    const c = new Angular5Csv(data, filename, this.csvOptions);
  }

  pdfExport() {
    //
  }

}
