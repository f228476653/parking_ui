import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../../shared/page-mode';
import { DetailQuery } from '../../../shared/accounting-report';
import { CliService } from '../../../services/cli.service';
import { GarageService } from '../../../services/garage.service';

@Component({
  selector: 'app-view-timeanalysis',
  templateUrl: './view-timeanalysis.component.html',
  styleUrls: ['./view-timeanalysis.component.css']
})
export class ViewTimeanalysisComponent implements OnInit {
  single: any[];
  timeanalysis_data: any[];


  view: any[] = [950, 325];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '小時';
  showYAxisLabel = true;
  yAxisLabel = '金額';

  colorScheme = {
    domain: ['#4EC1BD']
  };

  onSelect(event) {
    console.log(event);
  }


  constructor() {
    Object.assign(this, {a, timeanalysis_data});
   }

  ngOnInit() {
  }

}
export const timeanalysis_data = [
  '今年度', '去年度', '本月份', '上月份', '本週', '上週', '今日', '昨日'
];

export const a = [
  {
    'name': '0.5h',
    'value': 5000000
  },
  {
    'name': '1h',
    'value': 140000000
  },
  {
    'name': '2h',
    'value': 85000000
  },
  {
    'name': '3h',
    'value': 30000000
  },
  {
    'name': '4h',
    'value': 5000000
  },
  {
    'name': '5h',
    'value': 5100000
  },
  {
    'name': '6h',
    'value': 5300000
  },
  {
    'name': '7h',
    'value': 33000000
  },
  {
    'name': '8h',
    'value': 40000000
  },
  {
    'name': '9h',
    'value': 45000000
  },
  {
    'name': '10h',
    'value': 35000000
  },
  {
    'name': '11h',
    'value': 5500000
  },
  {
    'name': '12h',
    'value': 33000000
  },
  {
    'name': '13h',
    'value': 36000000
  },
  {
    'name': '14h',
    'value': 38000000
  },
  {
    'name': '15h',
    'value': 37000000
  },
  {
    'name': '16h',
    'value': 10000000
  },
  {
    'name': '17h',
    'value': 9500000
  },
  {
    'name': '18h',
    'value': 9000000
  },
  {
    'name': '19h',
    'value': 8500000
  },
  {
    'name': '20h',
    'value': 8000000
  },
  {
    'name': '21h',
    'value': 7500000
  },
  {
    'name': '22h',
    'value': 7000000
  },
  {
    'name': '23h',
    'value': 6000000
  },
  {
    'name': '24h',
    'value': 6500000
  },
  {
    'name': '24h+',
    'value': 48000000
  }
];


