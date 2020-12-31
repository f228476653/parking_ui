import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ManagementComponentInterface } from '../management-base';
import { GarageGroup, ApiResponse, SessionStorage, PageData, PageMode } from '../../shared/index';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { GarageGroupService } from '../../services/garage-group.service';
import { GarageGroupDialogComponent } from './garage-group-dialog/garage-group-dialog.component';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-garage-group-management',
  templateUrl: './garage-group-management.component.html',
  styleUrls: ['./garage-group-management.component.css'],
  animations: [routerTransition()]
})
export class GarageGroupManagementComponent implements ManagementComponentInterface<GarageGroup>, OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  txtTableFilter: string;
  isEmptyData = false;

  data: ApiResponse<GarageGroup[]>;
  dataSource: MatTableDataSource<GarageGroup> = new MatTableDataSource<GarageGroup>();
  displayedColumns = ['garage_group_id', 'company_name', 'garage_group_name', 'create_date', 'edit'];
  dialogWidth = '1000px';
  constructor(public garageGroupService: GarageGroupService, public editDialog: MatDialog, public sessionStorage: SessionStorage) { }

  ngOnInit() {
    this.refreshTable();
  }

  ngAfterViewInit() {
  }

  refreshTable() {
    if (this.sessionStorage.getIsSuperUser()) {
      this.garageGroupService.getGarageGroups().subscribe(response => {
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
      this.garageGroupService.getGarageGroupsByCustomerId(this.sessionStorage.getCustomerId()).subscribe(response => {
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
    const d = new PageData(new GarageGroup(), PageMode.add);
    const dialogRef = this.editDialog.open(GarageGroupDialogComponent, {
      width: this.dialogWidth,
      data: d
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  edit(element: GarageGroup) {
    const d = new PageData(element, PageMode.edit);
    const dialogRef = this.editDialog.open(GarageGroupDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }
  delete(id: number) {
    this.garageGroupService.deleteGarageGroupById(id).subscribe(res => {
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
