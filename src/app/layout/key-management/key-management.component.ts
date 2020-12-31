import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { routerTransition } from '../../router.animations';
import { KeyEditDialogComponent } from './key-edit-dialog/key-edit-dialog.component';
import { Keystore } from '../../shared/keystore';
import { KeystoreService } from '../../services/keystore.service';
import { KeyViewDialogComponent } from './key-view-dialog/key-view-dialog.component';
import { ManagementComponentInterface } from '../management-base';
import { Input } from '@angular/core';
import { DataMode } from '../../shared/data-mode';
import { PageMode, PageData, KeystorePageMode } from '../../shared/page-mode';
import { ApiResponse } from '../../shared/index';

@Component({
  selector: 'app-key-management',
  templateUrl: './key-management.component.html',
  styleUrls: ['./key-management.component.css'],
  animations: [routerTransition()]
})
export class KeyManagementComponent implements ManagementComponentInterface<Keystore>, OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isEmptyData = false;
  txtTableFilter: string;

  data: ApiResponse<Keystore[]>;
  dataSource: MatTableDataSource<Keystore> = new MatTableDataSource<Keystore>();
  displayedColumns = ['keystore_id', 'company_name', 'key_type', 'fixed_account_total'
  , 'dyanmic_account_total', 'service_type'
    , 'start_date', 'end_date', 'key_status', 'create_date', 'edit'];

  @Input() customerId: number;
  @Input() dataMode: DataMode = DataMode.all;
  dialogWidth = '1000px';
  constructor(public keystoreService: KeystoreService, public editDialog: MatDialog, public viewDialog: MatDialog) {  }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    if (this.dataMode === DataMode.all) {
      this.getkeystores();
    } else if (this.customerId) {
      this.getKeystoreByCustomerId(this.customerId);
    }
  }
  getkeystores() {
    this.keystoreService.getKeystores().subscribe(response => {
      this.data = response;
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (this.data.data.length === 0) {
        this.isEmptyData = true;
      } else {
        this.isEmptyData = false;
      }
    });
  }
  getKeystoreByCustomerId(customer_id: number) {
    this.keystoreService.getKeystoresByCustomerId(customer_id).subscribe(response => {
      this.data = response;
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (this.data.data.length === 0) {
        this.isEmptyData = true;
      } else {
        this.isEmptyData = false;
      }
    });
  }

  add() {
    const k = new Keystore();
    if (this.customerId) {
      k.customer_id = this.customerId;
    }
    const d = new PageData(k, KeystorePageMode.add);
    const dialogRef = this.editDialog.open(KeyEditDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }


  edit(element: Keystore) {
    if (this.customerId) {
      element.customer_id = this.customerId;
    }
    const d = new PageData(element, KeystorePageMode.edit);
    const dialogRef = this.editDialog.open(KeyEditDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }
  view(element: Keystore) {
    const dialogViewRef = this.viewDialog.open(KeyViewDialogComponent, {
      width: this.dialogWidth,
      data: element
    });

    dialogViewRef.afterClosed().subscribe(result => {
      // nothing to do here
    });
  }

  delete(key_id: number) {
    this.keystoreService.deleteKeystoreById(key_id).subscribe(res => {
      this.refreshTable();
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  clearTableFilter() {
    this.dataSource.filter = this.txtTableFilter = '';
  }
}
