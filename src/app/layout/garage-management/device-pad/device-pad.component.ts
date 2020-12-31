import { DeviceService } from './../../../services/device.service';
import { DevicePad } from './../../../shared/device-pad';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SessionStorage, ApiResponse, Garage } from '../../../shared';

@Component({
  selector: 'app-device-pad',
  templateUrl: './device-pad.component.html',
  styleUrls: ['./device-pad.component.css']
})
export class DevicePadComponent implements OnInit {
  data: DevicePad = new DevicePad();

  savedResponse: ApiResponse<Garage> = new ApiResponse<Garage>();

  constructor(public editDialog: MatDialog, public sessionStorage: SessionStorage,
    public deviceService: DeviceService) {}

  ngOnInit() {
  }
 save() {

 }
}
