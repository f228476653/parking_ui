import { Component, OnInit, Inject } from '@angular/core';
import { ApiResponse, GarageGroup, SessionStorage, PageData, PageMode, Garage, CheckedDataModel
  , MapGarageToGarageGroup } from '../../../shared/index';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GarageGroupService } from '../../../services/garage-group.service';
import { GarageService } from '../../../services/garage.service';

@Component({
  selector: 'app-garage-group-dialog',
  templateUrl: './garage-group-dialog.component.html',
  styleUrls: ['./garage-group-dialog.component.css']
})
export class GarageGroupDialogComponent implements OnInit  {

  checkedList: CheckedDataModel[] = [];
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  mapGarageGarageGroupResponse: ApiResponse<MapGarageToGarageGroup[]>;
  savedResponse: ApiResponse<GarageGroup> = new ApiResponse<GarageGroup>();
  data: GarageGroup = new GarageGroup();
  garageResponse: ApiResponse<Garage[]>;
  garageGroupId: number;

  constructor(
    public dialogRef: MatDialogRef<GarageGroupDialogComponent>
      , @Inject(MAT_DIALOG_DATA) public pageData: PageData<GarageGroup, PageMode>
      , public sessionStorage: SessionStorage
      , public garageGroupService: GarageGroupService
      , public garageService: GarageService
      ) {
    }

  ngOnInit(): void {
    if (this.pageData.data && this.pageData.data.garage_group_id) {
      this.garageGroupId = this.pageData.data.garage_group_id;
      this.getGarageGroupById(this.garageGroupId);
    }
    this.getGarages(this.sessionStorage.getCustomerId(), this.garageGroupId);
    // this.getGarageGroupsByCustomerId(this.sessionStorage.getCustomerId());
  }

  getGarageGroupsByCustomerId(customer_id: number) {
    this.garageGroupService.getGarageGroupsByCustomerId(customer_id).subscribe( x => {
      this.garageGroupResponse = x;
    });
  }

  /**
   *
   * @param customer_id customer id
   * @param garage_group_id garage group id
   */
  getGarages(customer_id: number, garage_group_id= 0): void {
    this.garageService.getGarages().subscribe( x => {
      this.garageResponse = x;
      this.garageResponse.data.forEach( w => {
        const a = new CheckedDataModel();
        a.checked = false;
        a.description = w.supplementary_details;
        a.display_name = w.garage_name;
        a.id = Number(w.garage_id);
        this.checkedList.push(a);
          if (garage_group_id !== 0) {
            this.garageGroupService.getMapGarageToGarageGroupByGarageGroupId(garage_group_id).subscribe( zz => {
              this.mapGarageGarageGroupResponse = zz;
              this.checkedList.forEach( ww => {
                this.mapGarageGarageGroupResponse.data.forEach( aa => {
                  ww.checked = ww.id === aa.garage_id;
                });
              });
            });
          }
      });
    });
  }

  getGarageGroupById(garage_group_id: number): void {
    this.garageGroupService.getGarageGroupById(garage_group_id).subscribe( x => {
      this.data  = x.data;
    });
  }

  getGroupGarages() {
    this.garageGroupService.getGarageGroups().subscribe(response => {
      this.garageGroupResponse = response;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }
}
