import { Component, OnInit} from '@angular/core';
import { MatDialog} from '@angular/material';
import { ApiResponse, SessionStorage } from '../../../shared/index';
import { DevicePV } from '../../../shared/device_pv';
import { DeviceService } from '../../../services/device.service';
@Component({
  selector: 'app-device-pv-form',
  templateUrl: './device-pv-form.component.html',
  styleUrls: ['./device-pv-form.component.css']
})
export class DevicePvFormComponent implements OnInit {
  isDisplaySaveResult = false;
  device_bean: DevicePV = new DevicePV();
  savedResponse: ApiResponse<DevicePV> = new ApiResponse<DevicePV>();
  deviceName;
  result;
  constructor( public editDialog: MatDialog, public sessionStorage: SessionStorage,
  public deviceService: DeviceService) {
   }

  ngOnInit(): void {
  }


  save() {
    console.log(this.device_bean);
    this.deviceService.show_device_pv_by_device_id(1).subscribe( res => {
      this.result = res.data;
      console.log(res.data);
    });
  }
}
