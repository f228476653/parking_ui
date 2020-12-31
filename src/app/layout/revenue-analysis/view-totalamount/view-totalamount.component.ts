
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../../shared/page-mode';
import { DetailQuery } from '../../../shared/accounting-report';
import { CliService } from '../../../services/cli.service';
import { GarageService } from '../../../services/garage.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-totalamount',
  templateUrl: './view-totalamount.component.html',
  styleUrls: ['./view-totalamount.component.css']
})
export class ViewTotalamountComponent implements OnInit {
  single: any[];
  ranges: any[];

  displayedColumns = ['name', 'total_amount', 'month_average', 'day_average'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Money';
  showYAxisLabel = true;
  yAxisLabel = 'Hour';

  colorScheme = {
    domain: ['#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };

  onSelect(event) {
    console.log(event);
  }


  constructor() {
    Object.assign(this, {single, ranges});
   }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  total_amount: number;
  month_average: number;
  day_average: number;
}


const ELEMENT_DATA: Element[] = [
  {name: '累積總金額', total_amount: 546567777, month_average: 45547315, day_average: 1497446},
  {name: '月平均金額', total_amount: 675294940, month_average: 56274578, day_average: 1850123},
  {name: '日平均金額', total_amount: 6454663, month_average: 537889, day_average: 17684}
];

export const ranges = [
  'year', 'lastyear', 'month', 'lastmonth', 'week', 'lastweek', 'day', 'yesterday'
];

export const single = [
  {
    'name': '0~8H',
    'value': 8940000
  },
  {
    'name': '8~16H',
    'value': 5000000
  },
  {
    'name': '16~24H',
    'value': 7200000
  }
];
