import { Component, OnInit } from '@angular/core';
import { EntryGateService, GarageService } from '../../services/index';
import { SessionStorage, EntryGate } from '../../shared/index';
import { ApiResponse } from '../../shared/api-response';
import { PieOnlyOneComponent, PieGridComponent} from '@rayyen/its-angular-charts';
import { MatDialog } from '@angular/material';
import { DashboardResourceGarageDialogComponent } from './dashboard-resource-garage-dialog/dashboard-resource-garage-dialog.component';
import { DashboardResourceDrivewayDialogComponent } from './dashboard-resource-driveway-dialog/dashboard-resource-driveway-dialog.component';
import { DashboardResourceDeviceDialogComponent } from './dashboard-resource-device-dialog/dashboard-resource-device-dialog.component';
import { DashboardResourceStallDialogComponent } from './dashboard-resource-stall-dialog/dashboard-resource-stall-dialog.component';
@Component({
  selector: 'app-dashboard-resource-main',
  templateUrl: './dashboard-resource-main.component.html',
  styleUrls: ['./dashboard-resource-main.component.css']
})

export class DashboardResourceMainComponent implements OnInit {

  single: any[];
  multi: any[];
  turnover: any[];
  bar: any[];
  occupancy: any[];

  // pie-onlyone
  // options
  showLegend = true;
  colorScheme = {
    domain: [ '#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };
  colorScheme_2 = {
    domain: [ '#BAD975' ]
  };
  colorScheme_3 = {
    domain: [ '#75BAD9' ]
  };
  view: any[] = [400, 200];
  showLabels = true;
  explodeSlices = true;
  doughnut = true;
  animations = true;
  pieTooltipText= '';
  tooltipDisabled = false;

  // bar-options
  bar_view: any[] = [450, 200];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  bar_showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  entryGateResponse: ApiResponse<EntryGate[]> = new ApiResponse<EntryGate[]>();
  garageAmount: ApiResponse<number> = new ApiResponse<number>();
  dialogWidth = '1000px';
  constructor(public garageDialog: MatDialog, private sessionStorage: SessionStorage, private garageService: GarageService
    , private entryGateService: EntryGateService) {
    Object.assign(this, {single, bar , occupancy, turnover , multi});
  }

  ngOnInit() {
    this.getEntryGates(this.sessionStorage.getCustomerId());
    this.getGarages(this.sessionStorage.getCustomerId());
  }

  getEntryGates(customer_id) {
    this.entryGateService.getEntryGatesByCustomerId(customer_id).subscribe( x => {
      this.entryGateResponse = x;
    });
  }

  /**
   * get garage amount;
   * @param customer_id customer_id
   */
  getGarages(customer_id) {
    this.garageService.getGarageAmountByCustomerId(customer_id).subscribe( x => {
      this.garageAmount = x;
    });
  }

  onSelect(e) {
    console.log(e);
  }

  onGarageClick() {
    const dialogRef = this.garageDialog.open(DashboardResourceGarageDialogComponent, {
      width: this.dialogWidth,
      data: single
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('garage closed');
    });
  }

  onDrivewayClick() {
    const dialogRef = this.garageDialog.open(DashboardResourceDrivewayDialogComponent, {
      width: this.dialogWidth,
      data: single
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('driveway closed');
    });
  }

  onLegendLabelClick(e) {

  }

  onStallClick() {
    const dialogRef = this.garageDialog.open(DashboardResourceStallDialogComponent, {
      width: this.dialogWidth,
      data: single
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('driveway closed');
    });
  }
}

export const single = [
  {
    name: '可用率',
    value: 777
  },
  {
    name: 'Disable',
    value: 1
  }
];

export const bar = [
  {
    name: '進',
    value: 837
  },
  {
    name: '出',
    value: 715
  }
];
export const occupancy = [
  {
    name: '週轉率',
    value: 321
  },
  {
    name: '出',
    value: 44
  }
];
export const turnover = [
  {
    name: '使用率',
    value: 399
  },
  {
    name: '出',
    value: 33
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
