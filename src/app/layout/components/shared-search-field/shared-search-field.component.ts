import { Component, OnInit, Input } from '@angular/core';
import { GarageService } from '../../../services/garage.service';
import { Garage } from '../../../shared/garage';
import { GarageGroupService } from '../../../services/garage-group.service';
import { GarageGroup, User , VehicleType , DeviceType} from '../../../shared';
import { ApiResponse, DateEnum, Instant, DateTest} from '../../../shared';
import { PageQuery } from '../../view-models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'app-shared-search-field',
  templateUrl: './shared-search-field.component.html',
  styleUrls: ['./shared-search-field.component.css']
})
export class SharedSearchFieldComponent implements OnInit {
  @Input() query: PageQuery ;
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  deviceType = DeviceType;
  constructor(public garageService: GarageService, public garageGroupService: GarageGroupService) { }

  ngOnInit() {
    this.getGarageGroup();
  }

  // getGarage() {
  //   this.garageService.getGarages().subscribe( res => {
  //     this.garageResponse = res;
  //   });
  // }

  onGarageGroupChanged(e) {
    this.garageService.getGaragesByGarageGroupId(e.value).subscribe( x => {
      this.garageResponse = x;
      console.log(x);
    });
    this.query.garage_id = '';
  }

  getGarageGroup() {
    this.garageGroupService.getGarageGroupsByAccountId().subscribe( res => {
      console.log(res);
      this.garageGroupResponse = res;
    });
  }
}
