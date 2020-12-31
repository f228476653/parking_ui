import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiResponse, GarageGroup, SessionStorage, Garage, CheckedDataModel, MapGarageToGarageGroup } from '../../../shared/index';
import { GarageGroupService } from '../../../services/garage-group.service';
import { GarageService } from '../../../services/garage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-garage-group-form',
  templateUrl: './garage-group-form.component.html',
  styleUrls: ['./garage-group-form.component.css']
})
export class GarageGroupFormComponent implements OnInit {

  @Input() mapGarageGarageGroupResponse: ApiResponse<MapGarageToGarageGroup[]>;
  @Input() checkedList: CheckedDataModel[] = [];
  @Input() savedResponse: ApiResponse<GarageGroup> = new ApiResponse<GarageGroup>();
  @Input() garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  @Input() data: GarageGroup = new GarageGroup();
  @Input() garageResponse: ApiResponse<Garage[]>;
  @Input() garageGroupId: number;
  @Output() onClose = new EventEmitter<boolean>();
  constructor(public garageGroupService: GarageGroupService, public sessionStorage: SessionStorage
    , public garageService: GarageService) { }

  ngOnInit() {
  }

  getGarageGroupNameExistOrNot() {
  }

  save() {
    this.savedResponse = new ApiResponse();
    this.data.customer_id = this.sessionStorage.getCustomerId();
    console.log(this.sessionStorage.getCustomerId());
    console.log(this.data);
    if (this.data.garage_group_id > 0) {
      this.garageGroupService.updateGarageGroup(this.data, this.getCheckedGarageList()).subscribe( res => {
        this.checkToken();
        this.savedResponse = res;
        this.data = this.savedResponse.data;
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
      });
    } else {
      this.garageGroupService.addGarageGroup(this.data, this.getCheckedGarageList()).subscribe( res => {
        this.checkToken();
        this.savedResponse = res;
        this.data = this.savedResponse.data;
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
      });
    }
  }
  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onClose.emit();
    }
  }
  getCheckedGarageList() {
    const w = [];
    this.checkedList.forEach( x => {
      if (x.checked) {
        w.push(x.id);
      }
    });
    return w;
  }
}
