import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PageData } from '../../../shared';

@Component({
  selector: 'app-dashboard-resource-device',
  templateUrl: './dashboard-resource-device.component.html',
  styleUrls: ['./dashboard-resource-device.component.css']
})
export class DashboardResourceDeviceComponent implements OnInit {

  countObservables = [];
  temp: number;
  red_lightball: number;
  @Input() data: any;
  @Output() onSave = new EventEmitter<boolean>();
  constructor(@Inject(MAT_DIALOG_DATA) public pageData: PageData<any, any>) {
    console.log(this.pageData);
    this.temp = 4;
    this.red_lightball = this.getRandomInt(this.temp);
    for (let _i = 0; _i < this.temp; _i++) {
      this.countObservables.push(_i);
    }
   }

  ngOnInit() {
  }

  getRandomInt(max) {
    const r =  Math.floor(Math.random() * Math.floor(max));
    return (r <= 0) ? 1 : r;
  }
}
