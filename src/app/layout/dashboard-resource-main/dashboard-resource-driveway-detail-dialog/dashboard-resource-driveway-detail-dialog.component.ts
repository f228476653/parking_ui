import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SessionStorage, PageData } from '../../../shared/index';
import { DashboardResourceDrivewayDialogComponent } from '../dashboard-resource-driveway-dialog/dashboard-resource-driveway-dialog.component';

@Component({
  selector: 'app-dashboard-resource-driveway-detail-dialog',
  templateUrl: './dashboard-resource-driveway-detail-dialog.component.html',
  styleUrls: ['./dashboard-resource-driveway-detail-dialog.component.css']
})
export class DashboardResourceDrivewayDetailDialogComponent implements OnInit {

  data: any;
  constructor(public dialogRef: MatDialogRef<DashboardResourceDrivewayDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pageData: PageData<any, any>
  , public sessionStorage: SessionStorage) {
    this.data = this.pageData;
  }

  ngOnInit() {
  }

  save() {

  }
}
