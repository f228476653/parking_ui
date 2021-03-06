
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../../shared/page-mode';
import { DetailQuery } from '../../../shared/accounting-report';
import { CliService } from '../../../services/cli.service';
import { GarageService } from '../../../services/garage.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-paymentmethod',
  templateUrl: './view-paymentmethod.component.html',
  styleUrls: ['./view-paymentmethod.component.css']
})
export class ViewPaymentmethodComponent implements OnInit {


  displayedColumns = ['name', 'total_amount', 'amount_lastyear', 'diff', 'diff_percent'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

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
  {name: '悠遊卡', total_amount: 546567777, amount_lastyear: 448006375, diff: 98561402, diff_percent: '0.22%'},
  {name: '一卡通', total_amount: 43466577, amount_lastyear: 37150921, diff: 6315656, diff_percent: '0.17%'},
  {name: '現金', total_amount: 16834456, amount_lastyear: 15166177, diff: 1668279, diff_percent: '0.10%'},
  {name: '大聲公app', total_amount: 22583635, amount_lastyear: 22360035, diff: 223600, diff_percent: '0.01%'}
];


