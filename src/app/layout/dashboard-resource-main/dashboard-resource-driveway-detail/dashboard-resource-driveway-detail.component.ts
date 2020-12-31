import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-resource-driveway-detail',
  templateUrl: './dashboard-resource-driveway-detail.component.html',
  styleUrls: ['./dashboard-resource-driveway-detail.component.css']
})
export class DashboardResourceDrivewayDetailComponent implements OnInit {

  @Input() data: any;
  @Output() onSave = new EventEmitter<boolean>();
  single: any[];
  single2: any[];
  single3: any[];
  single4: any[];
  multi: any[];
  inout_multi: any[];

  view: any[] = [800, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = '小時';
  showYAxisLabel = true;
  yAxisLabel = '數量';

  // colorScheme = {
  //   domain: ['#1689b9', '#0a507c', '#b5b8c4', '#64dab2', '#cddc39']
  // };
  colorScheme = {
    domain: ['#7588D9']
  };
  colorScheme_2 = {
    domain: ['#75BAD9']
  };

  // Group Vertical Bar Chart


  inout_view: any[] = [800, 300];

  // options
  inout_showXAxis = true;
  inout_showYAxis = true;
  inout_gradient = false;
  inout_showLegend = true;
  inout_showXAxisLabel = false;
  inout_xAxisLabel = 'Country';
  inout_showYAxisLabel = true;
  inout_yAxisLabel = 'Count';

  inout_colorScheme = {
    domain: [ '#D691BF', '#75BAD9', '#E86FAA', '#4EC1BD']
  };


  constructor() {
    Object.assign(this, {single, single2, single3, single4, inout_multi} );
  }

  ngOnInit() {
  }
  onSelect(e) {

  }
}

export const single = [
  {
    name: '1AM',
    value: 0
  },
  {
    name: '2AM',
    value: 1
  },
  {
    name: '3AM',
    value: 0
  },
  {
    name: '4AM',
    value: 0
  },
  {
    name: '5AM',
    value: 3
  },
  {
    name: '6AM',
    value: 18
  },
  {
    name: '7AM',
    value: 35
  },
  {
    name: '8AM',
    value: 33
  },
  {
    name: '9AM',
    value: 22
  },
  {
    name: '10AM',
    value: 12
  },
  {
    name: '11AM',
    value: 18
  },
  {
    name: '12PM',
    value: 9
  },
  {
    name: '1PM',
    value: 16
  },
  {
    name: '2PM',
    value: 6
  }
  ,
  {
    name: '3PM',
    value: 8
  }
  ,
  {
    name: '4PM',
    value: 22
  },
  {
    name: '5PM',
    value: 26
  },
  {
    name: '6PM',
    value: 15
  },
  {
    name: '7PM',
    value: 11
  },
  {
    name: '8PM',
    value: 11
  },
  {
    name: '9PM',
    value: 5
  },
  {
    name: '10PM',
    value: 2
  },
  {
    name: '11PM',
    value: 1
  },
  {
    name: '12AM',
    value: 0
  }
];

export const single2 = [
  {
    name: '1AM',
    value: 1
  },
  {
    name: '2AM',
    value: 1
  },
  {
    name: '3AM',
    value: 0
  },
  {
    name: '4AM',
    value: 0
  },
  {
    name: '5AM',
    value: 2
  },
  {
    name: '6AM',
    value: 11
  },
  {
    name: '7AM',
    value: 3
  },
  {
    name: '8AM',
    value: 5
  },
  {
    name: '9AM',
    value: 10
  },
  {
    name: '10AM',
    value: 11
  },
  {
    name: '11AM',
    value: 7
  },
  {
    name: '12PM',
    value: 3
  },
  {
    name: '1PM',
    value: 22
  },
  {
    name: '2PM',
    value: 21
  }
  ,
  {
    name: '3PM',
    value: 18
  }
  ,
  {
    name: '4PM',
    value: 20
  },
  {
    name: '5PM',
    value: 35
  },
  {
    name: '6PM',
    value: 24
  },
  {
    name: '7PM',
    value: 19
  },
  {
    name: '8PM',
    value: 31
  },
  {
    name: '9PM',
    value: 45
  },
  {
    name: '10PM',
    value: 17
  },
  {
    name: '11PM',
    value: 19
  },
  {
    name: '12AM',
    value: 5
  }
];

export const single3 = [
  {
    name: '1AM',
    value: 2
  },
  {
    name: '2AM',
    value: 0
  },
  {
    name: '3AM',
    value: 1
  },
  {
    name: '4AM',
    value: 2
  },
  {
    name: '5AM',
    value: 1
  },
  {
    name: '6AM',
    value: 8
  },
  {
    name: '7AM',
    value: 18
  },
  {
    name: '8AM',
    value: 21
  },
  {
    name: '9AM',
    value: 17
  },
  {
    name: '10AM',
    value: 8
  },
  {
    name: '11AM',
    value: 5
  },
  {
    name: '12PM',
    value: 9
  },
  {
    name: '1PM',
    value: 5
  },
  {
    name: '2PM',
    value: 5
  }
  ,
  {
    name: '3PM',
    value: 5
  }
  ,
  {
    name: '4PM',
    value: 5
  },
  {
    name: '5PM',
    value: 16
  },
  {
    name: '6PM',
    value: 10
  },
  {
    name: '7PM',
    value: 8
  },
  {
    name: '8PM',
    value: 9
  },
  {
    name: '9PM',
    value: 2
  },
  {
    name: '10PM',
    value: 1
  },
  {
    name: '11PM',
    value: 1
  },
  {
    name: '12AM',
    value: 0
  }
];

export const single4 = [
  {
    name: '1AM',
    value: 0
  },
  {
    name: '2AM',
    value: 0
  },
  {
    name: '3AM',
    value: 0
  },
  {
    name: '4AM',
    value: 1
  },
  {
    name: '5AM',
    value: 0
  },
  {
    name: '6AM',
    value: 13
  },
  {
    name: '7AM',
    value: 11
  },
  {
    name: '8AM',
    value: 5
  },
  {
    name: '9AM',
    value: 10
  },
  {
    name: '10AM',
    value: 11
  },
  {
    name: '11AM',
    value: 12
  },
  {
    name: '12PM',
    value: 15
  },
  {
    name: '1PM',
    value: 0
  },
  {
    name: '2PM',
    value: 0
  }
  ,
  {
    name: '3PM',
    value: 0
  }
  ,
  {
    name: '4PM',
    value: 0
  },
  {
    name: '5PM',
    value: 0
  },
  {
    name: '6PM',
    value: 0
  },
  {
    name: '7PM',
    value: 0
  },
  {
    name: '8PM',
    value: 0
  },
  {
    name: '9PM',
    value: 0
  },
  {
    name: '10PM',
    value: 0
  },
  {
    name: '11PM',
    value: 0
  },
  {
    name: '12AM',
    value: 0
  }
];


export const inout_multi = [
  {
    'name': '2017-12-01',
    'series': [
      {
        'name': 'in',
        'value': 320
      },
      {
        'name': 'out',
        'value': 420
      }
    ]
  },

  {
    'name': '2017-12-02',
    'series': [
      {
        'name': 'in',
        'value': 399
      },
      {
        'name': 'out',
        'value': 301
      }
    ]
  },
  {
    'name': '2017-12-03',
    'series': [
      {
        'name': 'in',
        'value': 300
      },
      {
        'name': 'out',
        'value': 230
      }
    ]
  },
  {
    'name': '2017-12-04',
    'series': [
      {
        'name': 'in',
        'value': 299
      },
      {
        'name': 'out',
        'value': 235
      }
    ]
  },
  {
    'name': '2017-12-05',
    'series': [
      {
        'name': 'in',
        'value': 273
      },
      {
        'name': 'out',
        'value': 288
      }
    ]
  },
  {
    'name': '2017-12-06',
    'series': [
      {
        'name': 'in',
        'value': 235
      },
      {
        'name': 'out',
        'value': 245
      }
    ]
  },
  {
    'name': '2017-12-07',
    'series': [
      {
        'name': 'in',
        'value': 299
      },
      {
        'name': 'out',
        'value': 310
      }
    ]
  }
];
