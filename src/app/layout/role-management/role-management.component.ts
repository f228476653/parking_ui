import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ManagementComponentInterface } from '../management-base';
import { Role, ApiResponse, PageMode, PageData} from '../../shared/index';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { UserService } from '../../services/user.service';
import { RoleEditDialogComponent } from './role-edit-dialog/role-edit-dialog.component';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css'],
  animations: [routerTransition()]
})

export class RoleManagementComponent implements ManagementComponentInterface<Role>, OnInit, AfterViewInit {
  @ViewChild('role_paginator') role_paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isEmptyData = false;
  txtTableFilter: string;
  data: ApiResponse<Role[]>;
  dataSource: MatTableDataSource<Role> = new MatTableDataSource<Role>();
  displayedColumns = ['company_name', 'name', 'description', 'role_type', 'create_date', 'edit'];

  constructor(public userService: UserService, public editDialog: MatDialog, public viewDialog: MatDialog) {  }

  ngOnInit() {
    this.refreshTable();
  }

  ngAfterViewInit() {
  }

  refreshTable() {
    this.userService.getRoles().subscribe(response => {
      this.data = response;
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.role_paginator;
      this.dataSource.sort = this.sort;
      if (this.data.data.length === 0) {
        this.isEmptyData = true;
      } else {
        this.isEmptyData = false;
      }
    });
  }

  add() {
    const pageData = new PageData(new Role(), PageMode.add);
    const dialogRef = this.editDialog.open(RoleEditDialogComponent, {
      width: '800px',
      data: pageData
    });
  }

  edit(element: Role) {
    const pageData = new PageData(element, PageMode.edit);
    const dialogRef = this.editDialog.open(RoleEditDialogComponent, {
      width: '800px',
      data: pageData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }
  view(element: Role) {
    const pageData = new PageData(element, PageMode.view);
    const dialogViewRef = this.viewDialog.open(RoleEditDialogComponent, {
      width: '800px',
      data: pageData
    });

    dialogViewRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  delete(key_id: number) {
    console.log(key_id);
    this.userService.deleteRoleById(key_id).subscribe(res => {
      if ( !res.data ) {
      }
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
