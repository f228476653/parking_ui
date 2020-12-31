
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../../shared/page-mode';
import { DetailQuery } from '../../../shared/accounting-report';
import { CliService } from '../../../services/cli.service';
import { GarageService } from '../../../services/garage.service';

@Component({
  selector: 'app-view-revenuetrends',
  templateUrl: './view-revenuetrends.component.html',
  styleUrls: ['./view-revenuetrends.component.css']
})
export class ViewRevenuetrendsComponent implements OnInit {
  single: any[];
  revenuerange_data: any[];


  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '金額';
  showYAxisLabel = true;
  yAxisLabel = '小時';

  colorScheme = {
    domain: ['#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };

  onSelect(event) {
    console.log(event);
  }


  constructor() {
    Object.assign(this, {single, revenuerange});
   }

  ngOnInit() {
  }

}
export const revenuerange = [
  '今年度', '去年度', '本月份', '上月份', '本週', '上週', '今日', '昨日'
];

export const single = [
  {
    'name': '0~8點',
    'value': 8940000
  },
  {
    'name': '8~16點',
    'value': 5000000
  },
  {
    'name': '16~24點',
    'value': 7200000
  }
];


