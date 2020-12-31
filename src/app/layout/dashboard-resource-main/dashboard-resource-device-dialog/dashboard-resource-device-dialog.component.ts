import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PageData, SessionStorage } from '../../../shared/index';

@Component({
  selector: 'app-dashboard-resource-device-dialog',
  templateUrl: './dashboard-resource-device-dialog.component.html',
  styleUrls: ['./dashboard-resource-device-dialog.component.css']
})
export class DashboardResourceDeviceDialogComponent implements OnInit {

  data: any;
  constructor(public dialogRef: MatDialogRef<DashboardResourceDeviceDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pageData: PageData<any, any>
  , public sessionStorage: SessionStorage) {
    this.data = this.pageData;
  }

  ngOnInit() {
  }
  save() {

  }
}
