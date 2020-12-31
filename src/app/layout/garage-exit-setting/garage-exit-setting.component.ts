import { Component, OnInit } from '@angular/core';
import { Garage } from '../../shared/garage';
import { GarageService } from '../../services/garage.service';
import { ApiResponse, SessionStorage, GarageGroup } from '../../shared/index';
import { PageData, PageMode } from '../../shared/page-mode';
import { AccountingReport, DetailQuery } from '../../shared/accounting-report';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort, MatSlideToggleModule } from '@angular/material';
import { GarageExitDialogComponent } from './garage-exit-dialog/garage-exit-dialog.component';
import { GarageGroupService } from '../../services';
import { GarageExitService } from '../../services/garage-exit.service';
import { GarageExit } from '../../shared/garage-exit';
import { ElsaData } from '../view-models';
import { Parking } from '../../shared/parking';
import { ExitConfigView, ExitConfigDetail } from './view-models/exit_config_view';

@Component({
  selector: 'app-garage-exit-setting',
  templateUrl: './garage-exit-setting.component.html',
  styleUrls: ['./garage-exit-setting.component.css']
})
export class GarageExitSettingComponent implements OnInit {
  dialogWidth = '1000px';
  groupname: string[];
  login_user_name = '';
  exit_type_array: string;
  default_exit_type = '正常出場,入場單錯誤,顧客突然不停,清場時不明原因已離場,其他';
  displayedColumns = ['exit_config_id', 'garage_code', 'garage_name', 'description', 'exit_type', 'onoroff', 'edit'];

  query: Query = new Query();
  dataSource: MatTableDataSource<ExitConfigView> = new MatTableDataSource<ExitConfigView>();
  garageList: MatTableDataSource<GarageExit> = new MatTableDataSource<GarageExit>();
  garage = 1;
  garage_info;
  // garage_edit_id: number;
  constructor(public garageExitService: GarageExitService, public garageGroupService: GarageGroupService
    , public garageService: GarageService, public editDialog: MatDialog, public sessionStorage: SessionStorage ) {
    this.login_user_name = this.sessionStorage.getAccount();
  }

  ngOnInit() {
    // this.showData();
    // this.showGarageGroup();
  }

  // showGarageGroup() {
  //   this.garageExitService.getVisibleGarageGroup().subscribe( res => {
  //     this.groupname = res.data;
  //   });
  // }

  refreshTable() {
      this.garageExitService.getGarageAllSetting().subscribe( res => {
        this.dataSource.data = res.data['garage'];
        console.log(this.dataSource.data);
        // this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }

  showData() {
    // this.garageExitService.getGarageAllSetting().subscribe( res => {
    //   this.groupname = res.data['groupname'];
    //   this.dataSource.data = res.data['garage'];
    // });
  }

  add() {
    // const d = new ElsaData<GarageExit, string>();
    // this.garageExitService.getGarageList(this.garage_id).subscribe( res => {
      // d.garage = res.data['garage'][0];
    //   this.exit_type_array = '正常出場,入場單錯誤,顧客突然不停,清場時不明原因已離場,其他';
    //   for (let i = 0; i < res.data['exit_type'].length; i++) {
    //       this.exit_type_array += ',' + res.data['exit_type'][i].exit_type;
    //   }
      // d.exit_type = this.exit_type_array;
      // console.log(this.dataSource.data[0]);
      // console.log(this.garage_id);
      // console.log(this.dataSource.data);
      // console.log(this.garage_info);
      const view = new ExitConfigView();
      view.garage_id = this.garage_info.garage_id;
      view.garage_code = this.garage_info.garage_code;
      view.garage_name = this.garage_info.garage_name;
      view.exit_type = [];
      console.log(view);
      // view.garage_name = this.dataSource.data.
      const dialogRef = this.editDialog.open(GarageExitDialogComponent, {
        width: this.dialogWidth,
        data: view
      });
      // dialogRef.afterClosed().subscribe(result => {
      //   this.refreshTable();
      // });
  }

  edit(element) {
    console.log(element);
    const dialogRef = this.editDialog.open(GarageExitDialogComponent, {
      width: this.dialogWidth,
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  delete(exit_config_id) {
    this.garageExitService.disableSetting(exit_config_id).subscribe( res => {
      this.refreshTable();
    });
  }

  getGarageGroup(e) {
    this.garageExitService.getGarageGroupList(e.value).subscribe( res => {
      this.garageList.data = res.data;
    });
    // TODO 之後要配合塞選條件過濾資料 現在只用customer_id 過濾
    this.garageExitService.getGarageAllSetting().subscribe( res => {
      this.dataSource.data = res.data['garage'];
      console.log(this.dataSource);
    });
  }

  // getGarageID(e) {
  //   this.garageExitService.getGarageGroupID(e.value).subscribe( res => {
  //   });
  // }

  isDisabled(exit_config_id, e) {
    this.garageExitService.getDisableButton(exit_config_id, e.checked).subscribe( res => {
  });
  }
}

export class Query {
  garage_code = '';
}
