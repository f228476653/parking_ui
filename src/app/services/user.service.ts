import { Injectable } from '@angular/core';
import { ServicebaseService } from './servicebase.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Role, User, Permission, ApiResponse, MapGarageGroupToAccount, MapGarageToAccount } from '../shared/index';
import { MapRolePermission } from '../shared/map-role-permission';

@Injectable()
export class UserService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getUsers(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(environment.pmsplus_api + `accounts`);
  }
  addUser(user: User, map_garage_to_account: MapGarageToAccount[], map_garage_group_to_account: MapGarageGroupToAccount[]
    , new_password: string): Observable<ApiResponse<number>> {
    const body = {user: user, map_garage_to_account: map_garage_to_account, map_garage_group_to_account: map_garage_group_to_account
      , new_password: new_password};
    return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `account`, body);
  }

  updateUser(user: User, map_garage_to_account: MapGarageToAccount[], map_garage_group_to_account: MapGarageGroupToAccount[]
    , new_password: string): Observable<ApiResponse<number>> {
    const body = {user: user, map_garage_to_account: map_garage_to_account, map_garage_group_to_account: map_garage_group_to_account
      , new_password: new_password};
    return this.http.put<ApiResponse<number>>(environment.pmsplus_api + `account`, body);
  }


  getUserById(id: string|number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(environment.pmsplus_api + `account\\` + id);
  }
  deleteUserById(id): Observable<ApiResponse<number>> {
    return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `account\\` + id);
  }

  getPermissions(): Observable<ApiResponse<Permission[]>> {
    return this.http.get<ApiResponse<Permission[]>>(environment.pmsplus_api + `permissions`);
  }

  getPermissionByRoleId(id): Observable<ApiResponse<MapRolePermission[]>> {
    return this.http.get<ApiResponse<MapRolePermission[]>>(environment.pmsplus_api + `map_role_permission\\` + id);
  }

  /*** Role */
  getRoles(): Observable<ApiResponse<Role[]>> {
    return this.http.get<ApiResponse<Role[]>>(environment.pmsplus_api + `roles`);
  }
  deleteRoleById(id: string|number): Observable<ApiResponse<boolean>> {
    console.log(id);
    return this.http.delete<ApiResponse<boolean>>(environment.pmsplus_api + `role\\delete\\` + id);
  }

  updateRole(role: Role, permission: Permission[]): Observable<ApiResponse<number>> {
    const body = {role: role, permission: permission};
    return this.http.put<ApiResponse<number>>(environment.pmsplus_api + `roles`, body);
  }

  addRole(role: Role, permission: Permission[]): Observable<ApiResponse<number>> {
    const body = {role: role, permission: permission};
    return this.http.post<ApiResponse<number>>(environment.pmsplus_api + `roles`, body);
  }

  getRoleById(id: string|number): Observable<ApiResponse<Role[]>> {
    return this.http.get<ApiResponse<Role[]>>(environment.pmsplus_api + `roles\\` + id);
  }

  checkRoleNameByCustomerId(id: string|number): Observable<ApiResponse<Boolean>> {
    return this.http.get<ApiResponse<Boolean>>(environment.pmsplus_api + `roles\\check_role_name` + id);
  }

  getRolesByCustomerId(customer_id: string|number): Observable<ApiResponse<Role[]>> {
    return this.http.get<ApiResponse<Role[]>>(environment.pmsplus_api + `roles\\customer_id\\` + customer_id);
  }

  isRoleNameExistByCustomerID(customer_name: string): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(environment.pmsplus_api + `role\\exist\\` + customer_name);
  }

  getUsersByCustomerId(customer_id: number): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(environment.pmsplus_api + `accounts\\customer_id\\` + customer_id);
  }

  getMapGarageToAccountByAccountId(account_id: number): Observable<ApiResponse<MapGarageToAccount[]>> {
    return this.http.get<ApiResponse<MapGarageToAccount[]>>(environment.pmsplus_api
      + `account\\garage\\` + account_id);
  }

  /**
   * 取得某帳號已經配置的場站群組清單 get_map_garage_group_to_account_by_account_id
   * @param acocunt_id account_id
   */
  getMapGarageGroupToAccountByAccountId(acocunt_id: number): Observable<ApiResponse<MapGarageGroupToAccount[]>> {
    return this.http.get<ApiResponse<MapGarageGroupToAccount[]>>(environment.pmsplus_api + `account\\garage_group\\` + acocunt_id);
  }

  /**
   * 取得某帳號已經配置的場站清單
   * @param account_id account_id
   */
  getMapGarageToAccountListByAccountId(account_id: number): Observable<ApiResponse<number[]>> {
    return this.http.get<ApiResponse<number[]>>(environment.pmsplus_api + `account\\garage_list\\` + account_id);
  }

  getMaximunPermission(): Observable<ApiResponse<Permission[]>> {
    return this.http.get<ApiResponse<Permission[]>>(environment.pmsplus_api + `permissions\\maximun`);
  }
  getUsersByGarageIdXorCustomerId(garage_id: number): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(environment.pmsplus_api + `accounts\\` + garage_id);
  }
}
