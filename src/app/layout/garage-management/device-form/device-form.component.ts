import { Component, OnInit , Input} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { DeviceList } from '../../view-models/device_list';
import { PageEvent, MatDialog } from '@angular/material';
import { ApiResponse, SessionStorage } from '../../../shared/index';
import { DevicePvFormComponent } from '../device-pv-form/device-pv-form.component';
import { DeviceIboxConfigurationDialogComponent } from '../device-ibox-configuration-dialog/device-ibox-configuration-dialog.component';
import { DeviceService } from '../../../services/device.service';
import { DeviceView } from './view/device_view';
import { FeeDialogComponent } from '../fee-dialog/fee-dialog.component';
@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {
  @Input() garageID: number;
  @Input() customerID: number;
  @Input() garageCode: string;
  // device_name = ['PV3', 'iBox', 'Pad'];
  device_name = ['iBox'];
  car_type = [{'name': '汽車', 'value': 'c'}, {'name': '機車', 'value': 'm'}, {'name': '大客車', 'value': 't'}];
  // displayedColumns = ['device_id', 'car_type', 'device_type', 'device_name', 'fee_args_name', 'update_time', 'update_user', 'edit'];
  displayedColumns = ['device_id', 'car_type', 'device_type', 'device_name', 'update_time', 'update_user', 'edit'];
  mappingDeviceType = {'c': '汽車', 'm': '機車', 't': '大客車'};
  type = [];
  selected_device: string;
  selected_fee: string;
  dialogWidth = '1500px';
  dataSource: MatTableDataSource<DeviceList> = new MatTableDataSource<DeviceList>();
  data;
  view_data: DeviceView[];
  savedResponse: ApiResponse<any> = new ApiResponse<any>();
  constructor(public deviceService: DeviceService, public sessionStorage: SessionStorage, public editDialog: MatDialog) {
   }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    // console.log('更新頁面');
    this.deviceService.get_all_device_by_garage_id(this.garageID).subscribe( res => {
      this.view_data = res.data;
    });
}

  fee(car_type: string) {
    // if ( this.selected_fee !== undefined) {
      const d = {'car_type': car_type, 'garage_id': this.garageID};
      // console.log(d);
      const dialogRef = this.editDialog.open(FeeDialogComponent, {
        width: this.dialogWidth,
        data: d
      });
      dialogRef.afterClosed().subscribe(result => {
        // console.log(result);
        this.refreshTable();
      });
    // }
  }

  addIboxDeviceArgs(all_data) {
    const dialogRef = this.editDialog.open(DeviceIboxConfigurationDialogComponent, {
      width: this.dialogWidth,
      data: all_data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  addPV3DeviceArgs(all_data) {
    const dialogRef = this.editDialog.open(DevicePvFormComponent, {
      width: this.dialogWidth,
      data: all_data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  addDevice(device: string) {
    // console.log(device);
    const all_data = {'customer_id': this.customerID, 'garage_id': this.garageID};
    // TODO 這邊要跳轉下一個dialog
    if (device === 'iBox') {
      all_data['device_type'] = 'iBox';
      this.addIboxDeviceArgs(all_data);
    } else if (device === 'PV3') {
      all_data['PV3'] = 'PV3';
      this.addPV3DeviceArgs(all_data);
    } else if (device === 'Pad') {
      // 施工中...
    }
  }

  delete(e) {
    const device_id = e.id;
    const device_type = e.device_type;
    this.deviceService.delete_device_by_device_id(device_type, device_id).subscribe( res => {
      // console.log('觀察刪除');
      // console.log(res);
      this.refreshTable();
    });
  }

  edit(e) {
    const device_id = e.id;
    const device_type = e.device_type;
    const all_data = {'customer_id': this.customerID, 'garage_id': this.garageID, 'device_id': device_id};
    // TODO 這邊要跳轉下一個dialog
    if (device_type === 'iBox') {
      all_data['device_type'] = 'iBox';
      this.addIboxDeviceArgs(all_data);
    } else if (device_type === 'PV3') {
      all_data['PV3'] = 'PV3';
      this.addPV3DeviceArgs(all_data);
    } else if (device_type === 'Pad') {
      // 施工中...
    }
  }

  export(e) {
    const device_id = e.id;
    const dievce_type = e.device_type;
    const car_type = e.car_type;
    // console.log('目前這邊會把該設備資料匯出到主機端上 預設好的路徑');
    // console.log(this.customerID);
    const all_data = {'data': {'customer_id': this.customerID, 'garage_id': this.garageID, 'device_ibox_args_id': device_id,
      'garage_code': this.garageCode}, 'device_type': dievce_type, 'car_type': e.car_type};
    // console.log(all_data);
    this.deviceService.export_csv_to_cloud(all_data).subscribe( res => {
      this.savedResponse = res;
    }, err => {
      this.savedResponse = err.error;
    });
  }

}
