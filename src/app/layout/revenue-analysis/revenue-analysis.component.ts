import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { PageData, PageMode } from '../../shared/page-mode';
import { DetailQuery } from '../../shared/accounting-report';
import { ViewTimeanalysisComponent } from './view-timeanalysis/view-timeanalysis.component';
import { CliService } from '../../services/cli.service';
import { GarageService } from '../../services/garage.service';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { ViewPaymentmethodComponent } from './view-paymentmethod/view-paymentmethod.component';
import { ViewRevenuetrendsComponent } from './view-revenuetrends/view-revenuetrends.component';
import { ViewSitedistributionComponent } from './view-sitedistribution/view-sitedistribution.component';
import { ViewTotalamountComponent } from './view-totalamount/view-totalamount.component';
import { ViewTransactiontypeComponent } from './view-transactiontype/view-transactiontype.component';
import { ViewAmountanalysisComponent } from './view-amountanalysis/view-amountanalysis.component';


@Component({
  selector: 'app-revenue-analysis',
  templateUrl: './revenue-analysis.component.html',
  styleUrls: ['./revenue-analysis.component.css']
})
export class RevenueAnalysisComponent implements OnInit {

  single: any[];
  multi: any[];
  multi2: any[];
  multi3: any[];
  multi4: any[];
  pokemonGroups: any[];
  revenueanalysis_data: any[];

  displayedColumns = ['name', 'total_amount', 'percent'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  view: any[] = [400, 300];
  bar_view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = '月份';
  showYAxisLabel = true;
  yAxisLabel = '營收';
  legendTitle = 'Year';

  // ngx-charts-pie-chart
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  colorScheme = {
    domain: ['#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };
  colorScheme_2 = {
    domain: [ '#4EC1BD' ]
  };

  // line, area
  autoScale = true;
  constructor(public cliService: CliService, public garageService: GarageService, public editDialog: MatDialog) {
    Object.assign(this, {single, multi, pokemonGroups, revenueanalysis_data, multi2, multi3, multi4});
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
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
   view_paymentmethod() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewPaymentmethodComponent, {
      width: '1000px',
      data: pageData
    });
   }
   view_revenuetrends() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewRevenuetrendsComponent, {
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
   view_totalamount() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewTotalamountComponent, {
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
   view_amountanalysis() {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = '11107'; // garage_code
    const pageData = new PageData<DetailQuery, PageMode>(detailQuery, PageMode.view);
    const dialogRef = this.editDialog.open(ViewAmountanalysisComponent, {
      width: '1000px',
      data: pageData
    });
   }
}

export interface Element {
  name: string;
  total_amount: string;
  percent: string;

}


const ELEMENT_DATA: Element[] = [
  { name: '南區', total_amount: '546,567,777', percent: '0.22%' },
  { name: '中區', total_amount: '43,466,577', percent: '0.17%' },
  { name: '北區', total_amount: '16,834,456', percent: '0.11%' }
];

export const revenueanalysis_data = [
  '本年度', '去年度', '本月份', '上月份', '本週', '上週', '今日', '昨日'
];

  export const pokemonGroups = [
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

  export const single = [
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
  },

  {
    'name': 'USA',
    'series': [
      {
        'name': '2010',
        'value': 7870000
      },
      {
        'name': '2011',
        'value': 8270000
      }
    ]
  },

  {
    'name': 'France',
    'series': [
      {
        'name': '2010',
        'value': 5000002
      },
      {
        'name': '2011',
        'value': 5800000
      }
    ]
  }
];

export const multi2 = [
  {
    'name': '臨停',
    'value': 463849
  },
  {
    'name': '月租',
    'value': 249733
  },
  {
    'name': '身障',
    'value': 36745
  }
];
export const multi3 = [
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

export const multi4 = [
  {
    'name': '北區',
    'series': [
      {
        'name': '2016',
        'value': 10632
      },
      {
        'name': '2017',
        'value': 36953
      }
    ]
  },
  {
    'name': '中區',
    'series': [
      {
        'name': '2016',
        'value': 49737
      },
      {
        'name': '2017',
        'value': 30986
      }
    ]
  },
  {
    'name': '南區',
    'series': [
      {
        'name': '2016',
        'value': 49737
      },
      {
        'name': '2017',
        'value': 45986
      }
    ]
  }
];
