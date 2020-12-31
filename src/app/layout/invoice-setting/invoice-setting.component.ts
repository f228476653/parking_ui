import { Component, OnInit } from '@angular/core';
import { Garage } from '../../shared/garage';
import { GarageService } from '../../services/garage.service';
import { ApiResponse } from '../../shared/index';
import { PageData, PageMode } from '../../shared/page-mode';
import { AccountingReport, DetailQuery } from '../../shared/accounting-report';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { InvoiceSettingDialogComponent } from './invoice-setting-dialog/invoice-setting-dialog.component';

@Component({
  selector: 'app-invoice-setting',
  templateUrl: './invoice-setting.component.html',
  styleUrls: ['./invoice-setting.component.css']
})
export class InvoiceSettingComponent implements OnInit {

  query: Query = new Query();
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dialogWidth = '1000px';
  displayedColumns = ['garage_code', 'garage_name', 'description', 'exit_type', 'edit'];


  constructor( public editDialog: MatDialog ) { }

  ngOnInit() {
  }


  view(garage_code: string) {
    const detailQuery = new DetailQuery();
    detailQuery.garage_code = garage_code;
  }

  getGarageName(garage_code: string) {
    this.garageResponse.data.forEach(obj => {
        if ( obj.garage_code === garage_code) {
          return obj.garage_name;
        }
    });
  }

  add() {
    const d = new PageData(new Garage(), PageMode.add);
    const dialogRef = this.editDialog.open(InvoiceSettingDialogComponent, {
      width: this.dialogWidth,
      data: d
    });
  }

}

export class Query {
  garage_code = '';
}

export interface Element {
  garage_code: number;
  garage_name: string;
  description: string;
  exit_type: string;
}

const ELEMENT_DATA: Element[] = [
  { garage_code: 1001, garage_name: 'Apple', description: 'test', exit_type: 'test' },
  { garage_code: 1002, garage_name: 'Banana', description: 'test2', exit_type: 'test2' },
  { garage_code: 1003, garage_name: 'CClemon', description: 'test3', exit_type: 'test3' }
];
