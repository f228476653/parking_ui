import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { DetailQuery } from '../../shared/accounting-report';
import { PageData, PageMode } from '../../shared/page-mode';
import { ViewSitedistributionComponent } from './view-sitedistribution/view-sitedistribution.component';
import { ViewTotalamountComponent } from './view-totalamount/view-totalamount.component';
import { ViewTransactiontypeComponent } from './view-transactiontype/view-transactiontype.component';
import { ViewPaymentmethodComponent } from './view-paymentmethod/view-paymentmethod.component';
import { ViewAmountanalysisComponent } from './view-amountanalysis/view-amountanalysis.component';
import { ViewTimeanalysisComponent } from './view-timeanalysis/view-timeanalysis.component';



@Component({
  selector: 'app-transaction-main',
  templateUrl: './transaction-main.component.html',
  styleUrls: ['./transaction-main.component.css'],
  animations: [routerTransition()]
})
export class TransactionMainComponent implements OnInit {

  single: any[];
  multi: any[];
  paymenttype: any[];
  bar: any[];
  parkertype: any[];
  displayedColumns = ['name', 'total_amount', 'percent'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  times = [
    { value: 'year', viewValue: '今年度' },
    { value: 'lastyear', viewValue: '去年度' },
    { value: 'month', viewValue: '本月份' },
    { value: 'lastmonth', viewValue: '上月份' },
    { value: 'week', viewValue: '本週' },
    { value: 'lastweek', viewValue: '上週' },
    { value: 'day', viewValue: '今日' },
    { value: 'yesterday', viewValue: '昨日' }
  ];

  pokemonGroups = [
    {
      name: '全部',
      pokemon: [
        { value: 'All', viewValue: '全部' },
        { value: 'North', viewValue: '北區' },
        { value: 'Center', viewValue: '中區' },
        { value: 'South', viewValue: '南區' }
      ]
    },
    {
      name: '北區',
      pokemon: [
        { value: 'station1', viewValue: '場站1' },
        { value: 'station2', viewValue: '場站2' },
        { value: 'station3', viewValue: '場站3' }
      ]
    },
    {
      name: '中區',
      pokemon: [
        { value: 'station4', viewValue: '場站4' },
        { value: 'station5', viewValue: '場站5' },
        { value: 'station6', viewValue: '場站6' }
      ]
    },
    {
      name: '南區',
      pokemon: [
        { value: 'station7', viewValue: '場站7' },
        { value: 'station8', viewValue: '場站8' },
        { value: 'station9', viewValue: '場站9' }
      ]
    }
  ];


  // pie-onlyone
  // options
  showLegend = true;
  colorScheme = {
    domain: [ '#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };
  colorScheme_2 = {
    domain: ['#4EC1BD']
  };

  view: any[] = [400, 200];
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  animations = true;
  pieTooltipText= '';
  tooltipDisabled = false;

  // bar-options
  bar_view: any[] = [500, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  bar_showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Month';
  showYAxisLabel = false;
  yAxisLabel = 'Garage';


  dialogWidth = '1000px';
  constructor( public editDialog: MatDialog ) {
    Object.assign(this, {bar , parkertype, paymenttype, multi});
  }

  ngOnInit() {

  }

  view_totalamount() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewTotalamountComponent, {
      width: '1000px',
      data: pageData
    });
   }
  view_sitedistribution() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewSitedistributionComponent, {
      width: '1000px',
      data: pageData
    });
   }
   view_transactiontype() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewTransactiontypeComponent, {
      width: '1000px',
      data: pageData
    });
   }
   view_paymentmethod() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewPaymentmethodComponent, {
      width: '1000px',
      data: pageData
    });
   }
   view_amountanalysis() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewAmountanalysisComponent, {
      width: '1000px',
      data: pageData
    });
   }
   view_timeanalysis() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewTimeanalysisComponent, {
      width: '1000px',
      data: pageData
    });
   }

  onSelect(e) {
    console.log(e);
  }

  onLegendLabelClick(e) {
  }

}


export interface Element {
  name: string;
  total_amount: number;
  percent: string;

}
const ELEMENT_DATA: Element[] = [
  { name: '南區', total_amount: 546567777, percent: '0.22%' },
  { name: '中區', total_amount: 43466577, percent: '0.17%' },
  { name: '北區', total_amount: 16834456, percent: '0.11%' }
];

export const bar = [
  {
    name: '1',
    value: 650364
  },
  {
    name: '2',
    value: 667836
  },
  {
    name: '3',
    value: 789660
  },
  {
    name: '4',
    value: 753550
  },
  {
    name: '5',
    value: 867732
  },
  {
    name: '6',
    value: 900000
  },
  {
    name: '7',
    value: 888888
  },
  {
    name: '8',
    value: 923500
  },
  {
    name: '9',
    value: 795680
  },
  {
    name: '10',
    value: 768388
  },
  {
    name: '11',
    value: 756677
  },
  {
    name: '12',
    value: 0
  }
];

export const parkertype = [
  {
    name: '身障',
    value: 9
  },
  {
    name: '臨停',
    value: 58
  },
  {
    name: '月租',
    value: 33
  }
];

export const paymenttype = [
  {
    'name': '現金',
    'value': 8632
  },
  {
    'name': '悠遊卡',
    'value': 59737
  },
  {
    'name': '一卡通',
    'value': 36745
  },
  {
    'name': '大聲公app',
    'value': 6240
  }
];

export const multi = [
  {
    'name': 'Germany',
    'series': [
      {
        'name': '2010',
        'value': 7300000
      },
      {
        'name': '2011',
        'value': 8940000
      }
    ]
  }
];


