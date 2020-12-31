import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, GarageGroup, Garage, CheckedDataModel } from '../shared/index';
import { HttpClient } from '@angular/common/http';
import { ServicebaseService } from './servicebase.service';
import { environment } from '../../environments/environment';
import { MapGarageToGarageGroup } from '../shared/map-garage-to-garage-group';

@Injectable()
export class GarageGroupService extends ServicebaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getGarageGroupsByCustomerId(customer_id: number): Observable<ApiResponse<GarageGroup[]>> {
    return this.http.get<ApiResponse<GarageGroup[]>>(environment.pmsplus_api + `garage_groups\\customer_id\\` + customer_id);
  }

  getGarageGroupById(id: number): Observable<ApiResponse<GarageGroup>> {
    return this.http.get<ApiResponse<GarageGroup>>(environment.pmsplus_api + `garage_group\\` + id);
  }

  getGarageGroups(): Observable<ApiResponse<GarageGroup[]>> {
    return this.http.get<ApiResponse<GarageGroup[]>>(environment.pmsplus_api + `garage_groups`);
  }

  getGarageGroupsByAccountId(): Observable<ApiResponse<GarageGroup[]>> {
    return this.http.get<ApiResponse<GarageGroup[]>>(environment.pmsplus_api + `garage_groups\\account_id`);
  }

  getMapGarageToGarageGroupByGarageGroupId(garage_group_id: number): Observable<ApiResponse<MapGarageToGarageGroup[]>> {
    return this.http.get<ApiResponse<MapGarageToGarageGroup[]>>(environment.pmsplus_api
      + `map_garage_to_garage_group\\` + garage_group_id);
  }

  deleteGarageGroupById(id: number): Observable<ApiResponse<number>> {
    return this.http.delete<ApiResponse<number>>(environment.pmsplus_api + `garage_group\\` + id);
  }

  addGarageGroup(data: GarageGroup, garages: number[]): Observable<ApiResponse<GarageGroup>> {
    const body = {garage_group: data, garages: garages};
    return this.http.post<ApiResponse<GarageGroup>>(environment.pmsplus_api + `garage_group`, body);
  }

  updateGarageGroup(data: GarageGroup, garages: number[]): Observable<ApiResponse<GarageGroup>> {
    const body = {garage_group: data, garages: garages};
    return this.http.put<ApiResponse<GarageGroup>>(environment.pmsplus_api + `garage_group`, body);
  }
}
