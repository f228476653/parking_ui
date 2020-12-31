import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PageData, SessionStorage } from '../../../shared/index';

@Component({
  selector: 'app-dashboard-resource-stall-dialog',
  templateUrl: './dashboard-resource-stall-dialog.component.html',
  styleUrls: ['./dashboard-resource-stall-dialog.component.css']
})
export class DashboardResourceStallDialogComponent implements OnInit {

  data: any;

  constructor(public dialogRef: MatDialogRef<DashboardResourceStallDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pageData: PageData<any, any>
  , public sessionStorage: SessionStorage) { }

  ngOnInit() {
  }

  save() {
  }
}
