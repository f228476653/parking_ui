import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material';
import { SessionStorage } from '../../../shared/index';
import { DashboardResourceDeviceDialogComponent } from '../dashboard-resource-device-dialog/dashboard-resource-device-dialog.component';
import { DashboardResourceDrivewayDetailDialogComponent } from '../dashboard-resource-driveway-detail-dialog/dashboard-resource-driveway-detail-dialog.component';

@Component({
  selector: 'app-dashboard-resource-driveway',
  templateUrl: './dashboard-resource-driveway.component.html',
  styleUrls: ['./dashboard-resource-driveway.component.css']
})
export class DashboardResourceDrivewayComponent implements OnInit {

  in_out: any[];
  in_out_small: any[];
  bar: any[];
  bar_100: any[];
  bar_75: any[];
  // pie-onlyone
  // options
  showLegend = true;
  colorScheme = {
    domain: [ '#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };
  colorScheme_2 = {
    domain: [ '#BAD975' ]
  };
  view: any[] = [400, 200];
  showLabels = true;
  explodeSlices = true;
  doughnut = true;
  animations = true;
  @Input() data: any;
  @Output() onSave = new EventEmitter<boolean>();
  bar_view: any[] = [450, 200];
  top_bar_view: any[] = [400, 150];
  pieTooltipText = '';
  tooltipDisabled = false;
  small_view: any[] = [200, 90];
  small_ball: any[] = [200, 250];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  bar_showLegend = true;
  small_showLegen = false;
  showXAxisLabel = false;
  xAxisLabel = '城市';
  showYAxisLabel = false;
  small_showYAxisLabel = false;
  yAxisLabel = '人口';
  w: any;
  y: any;
  z: any;

  dialogWidth = '600px';

  constructor(public garageDialog: MatDialog, private sessionStorage: SessionStorage) {
}

  ngOnInit() {
    Object.assign(this, { bar, in_out, in_out_small, bar_75, bar_100});
    this.w = [data1, data2, data3];
    this.y = [data4, data5, data6];
    this.z = [data7, data8, data9];
  }

  onDeviceClick(e) {
    console.log(e);
    const dialogRef = this.garageDialog.open(DashboardResourceDeviceDialogComponent, {
      width: this.dialogWidth,
      data: e
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('driveway closed');
    });
  }
  onSelect(e) {

  }
  onLegendLabelClick(e) {

  }

  onDrivewayClick(e) {
    console.log(e);
    const dialogRef = this.garageDialog.open(DashboardResourceDrivewayDetailDialogComponent, {
      width: '1000px',
      data: e
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('driveway detail closed');
    });
  }

}
export const data1 = [
  {
    name: '敦南一站'
  },
  {
    name: '敦南二站'
  },
  {
    name: '敦南三站'
  },
];
export const data2 = [
  {
    name: '新生一站'
  },
  {
    name: '新生二站'
  },
  {
    name: '永康站'
  }
];
export const data3 = [
  {
    name: '古亭站'
  },
  {
    name: '中正紀念堂'
  }
];

export const data4 = [
  {
    name: '台中一站'
  },
  {
    name: '台中二站'
  },
  {
    name: '台中三站'
  }
];

export const data5 = [
  {
    name: '台中四站'
  },
  {
    name: '台中五站'
  },
  {
    name: '台中六站'
  }
];

export const data6 = [
  {
    name: '台中七站'
  },
  {
    name: '台中八站'
  }
];

export const data7 = [
  {
    name: '台南一站'
  },
  {
    name: '台南二站'
  },
  {
    name: '台南三站'
  }
];

export const data8 = [
  {
    name: '台南四站'
  },
  {
    name: '台南五站'
  },
  {
    name: '台南六站'
  }
];

export const data9 = [
  {
    name: '台南七站'
  },
  {
    name: '台南八站'
  }
];

export const bar = [
  {
    name: '設備可用率',
    value: 10
  },
  {
    name: '出口',
    value: 0.11429
  }
];
export const bar_75 = [
  {
    name: '設備可用率',
    value: 3
  },
  {
    name: '出口',
    value: 1
  }
];

export const bar_100 = [
  {
    name: '設備可用率',
    value: 4
  },
  {
    name: '出口',
    value: 0
  }
];

export const in_out = [
  {
    name: '進',
    value: 683
  },
  {
    name: '出',
    value: 271
  }
];

export const in_out_small = [
  {
    name: '進',
    value: 86
  },
  {
    name: '出',
    value: 31
  }
];
