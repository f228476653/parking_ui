
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../../shared/page-mode';
import { DetailQuery } from '../../../shared/accounting-report';
import { CliService } from '../../../services/cli.service';
import { GarageService } from '../../../services/garage.service';

@Component({
  selector: 'app-view-amountanalysis',
  templateUrl: './view-amountanalysis.component.html',
  styleUrls: ['./view-amountanalysis.component.css']
})
export class ViewAmountanalysisComponent implements OnInit {
  single: any[];
  viewamount_data: any[];


  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '金額';
  showYAxisLabel = true;
  yAxisLabel = '場站';

  colorScheme = {
    domain: ['#4EC1BD']
  };
  colorScheme_2 = {
    domain: ['#2A76BB', '#5591C9', '#77A7D4', '#92B9DD', '#A8C7E4', '#B9D2E9', '#C7DBED', '#D2E2F1', '#DBE8F4', '#E2EDF6']
  };

  onSelect(event) {
    console.log(event);
  }

  constructor() {
    Object.assign(this, {single, viewamount_data});
   }

  ngOnInit() {
  }

}
export const viewamount_data = [
  '營收金額', '停車平均營收金額'
];

export const single = [
  {
    'name': '敦南一站',
    'value': 8940000
  },
  {
    'name': '敦南二站',
    'value': 7800000
  },
  {
    'name': '敦南三站',
    'value': 7200000
  },
  {
    'name': '新生一站',
    'value': 6600000
  },
  {
    'name': '新生二站',
    'value': 6300000
  },
  {
    'name': '永康站',
    'value': 5000000
  },
  {
    'name': '古亭站',
    'value': 4700000
  },
  {
    'name': '中正紀念堂',
    'value': 4300000
  },
  {
    'name': '師大一站',
    'value': 3500000
  },
  {
    'name': '師大二站',
    'value': 2000000
  }
];


