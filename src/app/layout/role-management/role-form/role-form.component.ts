import { Component, OnInit, Inject, SecurityContext, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { UserService } from '../../../services/user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';
import { ApiResponse, Permission, MapRolePermission, Role, SessionStorage, PageData, PageMode } from '../../../shared/index';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {
  //@Input() customer_id: number;
  @Output() onSave = new EventEmitter<object>();
  @Input() role: Role ;
  @Input() mode: number ;
  @Input() savedResponse: ApiResponse<number> ;
  @Input() permissionResponse: ApiResponse<Permission[]> ;
  // savedResponse: ApiResponse<number> = new ApiResponse<number>();
  // permissionResponse: ApiResponse<Permission[]> = new ApiResponse<Permission[]>();
  mapResponse: ApiResponse<MapRolePermission[]> = new ApiResponse<MapRolePermission[]>();
  dataSource: MatTableDataSource<Permission> = new MatTableDataSource<Permission>();
  roles: ApiResponse<Role[]> = new ApiResponse<Role[]>();
  // @Input() savedResponse: ApiResponse<number> ;
  // @Input() permissionResponse: ApiResponse<Permission[]>;
  // @Input() mapResponse: ApiResponse<MapRolePermission[]> ;
  // @Input() dataSource: MatTableDataSource<Permission>;
  // @Input() roles: ApiResponse<Role[]> ;
  sameRoleName = false;
  disable = false;
  isCustomerRoot ;
  isSuperUser ;
  permissionTreeView = [];
  constructor(
    public dialogRef: MatDialogRef<RoleFormComponent>
    , public userService: UserService, public sessionStorage: SessionStorage) {
  }

  save() {
    //   this.sessionStorage.hasToken();
    //   const permission = this.gatherPermission(this.permissionResponse.data, [], 0);
    //   this.savedResponse = new ApiResponse();
    //   if (this.role.role_id > 0) {
    //     this.userService.updateRole(this.role, permission).subscribe( res => {
    //       this.savedResponse = res;
    //     }, err => {
    //       this.savedResponse = err.error;
    //     });
    //   } else {
    //     this.userService.addRole(this.role, permission).subscribe( res => {
    //       this.savedResponse = res;
    //     }, err => {
    //       this.savedResponse = err.error;
    //     });
    // }
    // this.savedResponse = new ApiResponse<number>();
    console.log('---child---');
    console.log(this.permissionResponse.data);
    const object = {'permissionResponse': this.permissionResponse.data , 'role': this.role } ;
    this.onSave.emit(object);
  }


  // add = 1 ,
  // edit = 2 ,
  // view = 3 ,
  ngOnInit(): void {
    this.checkSuperUser();
      if (this.role) {
        this.getPermission();
          // this.getMapRolePermission(this.pageData.data.role_id);
          if (this.mode === 3) {
            this.disable = true;
          } else if (this.mode === 1) {
            this.role['role_id'] = null;
            this.role['name'] = '';
            this.role['description'] = '';
          }
      } else {
      this.role = new Role();
      this.role['role_id'] = null;
      this.role['name'] = '';
      // this.getPermission();
    }
  }



   /*
   provide a Permission List and return a hierachy permission list
   */
  listToTreeView(list) {
    const mapper = {}, roots = [];
    for (let __i = 0; __i < list.length; __i += 1) {
      mapper[list[__i].permission_id] = __i;
        list[__i].children = [];
    }
    for (let _i = 0; _i < list.length; _i += 1) {
        const node = list[_i];
        if (node.parent_id !== 0) {
            list[mapper[node.parent_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}
    getPermissionTreeView() {
      this.permissionTreeView = this.listToTreeView(this.permissionResponse.data);
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


  checkSuperUser() {
    this.isSuperUser = this.sessionStorage.getIsSuperUser();
    this.isCustomerRoot = this.sessionStorage.getIsCustomerRoot();
  }


  checkRoleName() {
    if (this.mode === 1 ) {
      console.log(this.role.name);
      if ( this.role.name !== '' ) {
        this.userService.isRoleNameExistByCustomerID(this.role.name).subscribe( x => {
          this.sameRoleName = x.data;
        });
      }
    }
  }


  getPermission() {
    this.userService.getMaximunPermission().subscribe( res => {
      this.permissionResponse = res;
      this.dataSource = new MatTableDataSource(res.data);
      this.getPermissionWhenAdd();
      if (this.mode === 1) {
        this.permissionTreeView = this.listToTreeView(this.permissionResponse.data);
      } else {
        this.getMapRolePermission(this.role.role_id);
      }
    });
  }

  getMapRolePermission(id) {
    Observable.zip(
     this.userService.getPermissions()
    , this.userService.getPermissionByRoleId(id)
    , this.userService.getRoleById(id)
    , this.userService.getMaximunPermission()
    )
    .subscribe( x => {
      if ( !x[2] && x[2].data.length !== 1  ) {
        this.savedResponse.has_error = false;
        this.savedResponse.message = 'can not find Role by id' + id;
      }

      this.roles.data = x[2].data;
      this.mapResponse.data = x[1].data;
      this.permissionResponse.data.forEach( (w) => {
          this.mapResponse.data.forEach( (a) => {
              if (a.permission_id === w.permission_id) {
                w.checked = true;
              }
          });
      });
       this.permissionTreeView = this.listToTreeView(this.permissionResponse.data);
    });
  }



  getPermissionWhenAdd() {
       this.permissionTreeView = this.listToTreeView(this.permissionResponse.data);
  }


//  /*
//  provide a Permission List and return a hierachy permission list
//  */
//  listToTreeView(list) {
//     const mapper = {}, roots = [];
//     for (let __i = 0; __i < list.length; __i += 1) {
//       mapper[list[__i].permission_id] = __i;
//         list[__i].children = [];
//     }
//     for (let _i = 0; _i < list.length; _i += 1) {
//         const node = list[_i];
//         if (node.parent_id !== 0) {
//             list[mapper[node.parent_id]].children.push(node);
//         } else {
//             roots.push(node);
//         }
//     }
//     return roots;
// }

}

