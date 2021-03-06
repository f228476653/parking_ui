import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../../shared/page-mode';
import { DetailQuery } from '../../../shared/accounting-report';
import { CliService } from '../../../services/cli.service';
import { GarageService } from '../../../services/garage.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-transactiontype',
  templateUrl: './view-transactiontype.component.html',
  styleUrls: ['./view-transactiontype.component.css']
})
export class ViewTransactiontypeComponent implements OnInit {
  single: any[];

  displayedColumns = ['name', 'total_amount', 'amount_lastyear', 'diff', 'diff_percent'];
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
   }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  total_amount: number;
  amount_lastyear: number;
  diff: number;
  diff_percent: string;
}


const ELEMENT_DATA: Element[] = [
  {name: '臨停', total_amount: 546567777, amount_lastyear: 448006375, diff: 98561402, diff_percent: '0.22%'},
  {name: '月租', total_amount: 43466577, amount_lastyear: 37150921, diff: 6315656, diff_percent: '0.17%'},
  {name: '身障', total_amount: 16834456, amount_lastyear: 15166177, diff: 1668279, diff_percent: '0.11%'}
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


