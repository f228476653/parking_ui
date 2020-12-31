import { Component, OnInit, Inject, SecurityContext, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { UserService } from '../../../services/user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { ApiResponse, Permission, MapRolePermission, Role, SessionStorage, PageData, PageMode } from '../../../shared/index';

@Component({
  selector: 'app-role-edit-dialog',
  templateUrl: './role-edit-dialog.component.html',
  styleUrls: ['./role-edit-dialog.component.css']
})

export class RoleEditDialogComponent implements OnInit {
    savedResponse: ApiResponse<number> = new ApiResponse<number>();
    permissionResponse: ApiResponse<Permission[]> = new ApiResponse<Permission[]>();
    mapResponse: ApiResponse<MapRolePermission[]> = new ApiResponse<MapRolePermission[]>();
    dataSource: MatTableDataSource<Permission> = new MatTableDataSource<Permission>();
    roles: ApiResponse<Role[]> = new ApiResponse<Role[]>();
    isSuperUser;
    isCustomerRoot;
    role: Role;
    mode: number;
    constructor(
      public dialogRef: MatDialogRef<RoleEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public pageData: PageData<Role, PageMode>
      , public userService: UserService, public sessionStorage: SessionStorage) {
    }
    permissionTreeView = [];
    // add = 1 ,
    // edit = 2 ,
    // view = 3 ,
    ngOnInit(): void {
      console.log('----');
      console.log(this.pageData);
      this.role = this.pageData.data;
      this.mode = this.pageData.mode;
    }

    checkToken() {
      if (!this.sessionStorage.hasToken()) {
        this.onCloseDailog();
      }
    }

    onCloseDailog(): void {
      this.dialogRef.close();
    }

  public gatherPermission(list: Permission[], result: Permission[], role_id: number) {
    for (let _i = 0; _i < list.length; _i += 1) {
        if (list[_i].checked === true) {
          const k = new Permission();
          k.permission_id = list[_i].permission_id;
          result.push(k);
        }
    }
    return result;
  }

  save(e) {
    this.sessionStorage.hasToken();
    const permission = this.gatherPermission(e.permissionResponse, [], 0);
    this.savedResponse = new ApiResponse();
    if (this.role.role_id > 0) {
      this.userService.updateRole(e.role, permission).subscribe( res => {
        this.savedResponse = res;
      }, err => {
        this.savedResponse = err.error;
      });
    } else {
      this.userService.addRole(e.role, permission).subscribe( res => {
        this.savedResponse = res;
      }, err => {
        this.savedResponse = err.error;
      });
    }
  }
}

