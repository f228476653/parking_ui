import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ManagementComponentInterface } from '../management-base';
import { EntryGate, ApiResponse, PageData, PageMode, SessionStorage } from '../../shared/index';
import { EntryGateService } from '../../services/index';
import { EntryGateDialogComponent } from './entry-gate-dialog/entry-gate-dialog.component';

@Component({
  selector: 'app-entry-gate-management',
  templateUrl: './entry-gate-management.component.html',
  styleUrls: ['./entry-gate-management.component.css'],
  animations: [routerTransition()]
})
export class EntryGateManagementComponent implements ManagementComponentInterface<EntryGate>, OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  txtTableFilter: string;
  isEmptyData = false;

  data: ApiResponse<EntryGate[]>;
  dataSource: MatTableDataSource<EntryGate> = new MatTableDataSource<EntryGate>();
  displayedColumns = ['entry_gate_id', 'garage_name', 'entry_gate_sn', 'direction', 'has_e_envoicing', 'create_date', 'edit'];
  dialogWidth = '1000px';
  constructor(public entryGateService: EntryGateService, public editDialog: MatDialog, public sessionStorage: SessionStorage) { }

  ngOnInit() {
    this.refreshTable();
  }

  ngAfterViewInit() {
  }

  refreshTable() {
    if (this.sessionStorage.getIsSuperUser()) {
    this.entryGateService.getEntryGates().subscribe(response => {
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
  } else {
    this.entryGateService.getEntryGatesByCustomerId(this.sessionStorage.getCustomerId()).subscribe(response => {
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
  }

  add() {
    const d = new PageData(new EntryGate(), PageMode.add);
    const dialogRef = this.editDialog.open(EntryGateDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  edit(element: EntryGate) {
    const d = new PageData(element, PageMode.edit);
    const dialogRef = this.editDialog.open(EntryGateDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  delete(account_id: number) {
    this.entryGateService.deleteEntryGateById(account_id).subscribe(res => {
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
