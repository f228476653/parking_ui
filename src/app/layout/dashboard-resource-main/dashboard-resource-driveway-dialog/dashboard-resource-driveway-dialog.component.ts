import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SessionStorage, PageData } from '../../../shared/index';

@Component({
  selector: 'app-dashboard-resource-driveway-dialog',
  templateUrl: './dashboard-resource-driveway-dialog.component.html',
  styleUrls: ['./dashboard-resource-driveway-dialog.component.css']
})
export class DashboardResourceDrivewayDialogComponent implements OnInit {

  data: any;
  constructor(public dialogRef: MatDialogRef<DashboardResourceDrivewayDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pageData: PageData<any, any>
  , public sessionStorage: SessionStorage) { }

  ngOnInit() {
  }
  save() {
  }
}
