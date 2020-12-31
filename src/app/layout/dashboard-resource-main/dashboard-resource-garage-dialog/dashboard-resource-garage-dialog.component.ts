import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PageData, SessionStorage } from '../../../shared/index';

@Component({
  selector: 'app-dashboard-resource-garage-dialog',
  templateUrl: './dashboard-resource-garage-dialog.component.html',
  styleUrls: ['./dashboard-resource-garage-dialog.component.css']
})
export class DashboardResourceGarageDialogComponent implements OnInit {


  data: any;
  constructor(public dialogRef: MatDialogRef<DashboardResourceGarageDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public pageData: PageData<any, any>
  , public sessionStorage: SessionStorage) { }

  ngOnInit() {
  }
  save() {
  }
}
