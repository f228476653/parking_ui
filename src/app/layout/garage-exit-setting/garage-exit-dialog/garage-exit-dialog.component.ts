import { Component, OnInit, Inject, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiResponse, Garage, SessionStorage } from '../../../shared/index';
import { GarageExitService } from '../../../services/garage-exit.service';
import { GarageExit } from '../../../shared/garage-exit';
import { PageData } from '../../../shared/page-mode';
import { ElsaData } from '../../view-models';
import { ExitConfigView } from '../view-models/exit_config_view';

@Component({
  selector: 'app-garage-exit-dialog',
  templateUrl: './garage-exit-dialog.component.html',
  styleUrls: ['./garage-exit-dialog.component.css']
})
export class GarageExitDialogComponent implements OnInit {
  isDisplaySaveResult = false;
  event: KeyboardEvent;
  Garage = new FormControl('', [Validators.required]);
  selected_garage_name: GarageExit;
  exit_type: string;
  exit_type_item: GarageExit;
  description: string;
  // exit_type_array: string[];
  savedResponse: ApiResponse<Garage> = new ApiResponse<Garage>();
  exit_type_array = '';
  constructor(public dialogRef: MatDialogRef<GarageExitDialogComponent>
    , @Inject(MAT_DIALOG_DATA) public view: ExitConfigView
  , public sessionStorage: SessionStorage, public garageExitService: GarageExitService) {
   }

  ngOnInit(): void {
    for (let i = 0; i < this.view.exit_type.length; i++) {
      this.exit_type_array += this.view.exit_type[i].exit_type;
      if ( i !== this.view.exit_type.length - 1) {
        this.exit_type_array += ',';
      }
      // console.log(this.view);
      // console.log(this.exit_type_array);
    }
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }

  save() {
    const type_array = this.exit_type_array.split(',');
    const exit_detail = [];
    for (let i = 0; i < this.view.exit_type.length; i++) {
      exit_detail.push(this.view.exit_type[i]['exit_type_config_detail_id']);
    }
    const data = {'exit_type_config_detail': {'exit_type_config_detail_id': exit_detail, 'exit_type': type_array},
    'exit_config': {'description' : this.view.description, 'exit_config_id' : this.view.exit_config_id}};
    console.log(data);
    // this.garageExitService.getSaveItems(data).subscribe( res => {
    // });
    // this.onCloseDailog();

// }
    // console.log(this.elsa_data);
    // this.exit_type_array = exit_type.split(',');
    // this.exit_type_item = new GarageExit();
    // this.exit_type_item['exit_type_config_detail'] = this.exit_type_array;
    // this.garageExitService.getSaveItems(this.exit_type_item).subscribe( res => {
    // });
    // // console.log(this.exit_type_item);
  }


}


