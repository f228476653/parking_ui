import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, ApiResponse, SessionStorage } from '../../shared/index';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource
  , MatPaginator, MatButton, MatInput, MatSort} from '@angular/material';
import { AccountEditDialogComponent } from './account-edit-dialog/account-edit-dialog.component';
import { Input } from '@angular/compiler/src/core';
import { routerTransition } from '../../router.animations';
import { ManagementComponentInterface } from '../management-base';
import { DataMode } from '../../shared/data-mode';
import { PageMode, PageData } from '../../shared/page-mode';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css'],
  animations: [routerTransition()]
})
export class AccountManagementComponent implements ManagementComponentInterface<User>, OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  txtTableFilter: string;
  isEmptyData = false;

  data: ApiResponse<User[]>;
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns = ['account_id', 'company_name', 'account', 'user_first_name', 'user_last_name', 'email', 'mobile', 'edit'];
  dialogWidth = '1000px';
  constructor(public userService: UserService, public editDialog: MatDialog, public sessionStorage: SessionStorage) { }

  ngOnInit() {
    console.log('refresh');
    this.refreshTable();
  }

  ngAfterViewInit() {
  }

  refreshTable() {
      this.userService.getUsers().subscribe(response => {
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
    const d = new PageData(new User(), PageMode.add);
    const dialogRef = this.editDialog.open(AccountEditDialogComponent, {
      width: this.dialogWidth,
      data: d
    });
  }

  edit(element: User) {
    const d = new PageData(element, PageMode.edit);
    const dialogRef = this.editDialog.open(AccountEditDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }
  delete(account_id: number) {
    this.userService.deleteUserById(account_id).subscribe(res => {
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
