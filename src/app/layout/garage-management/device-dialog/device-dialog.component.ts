import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import { SessionStorage } from '../../../shared/index';


@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})

export class DeviceDialogComponent implements OnInit {
  isDisplaySaveResult = false;
  garage_id: number;
  customer_id: number;
  garage_code: string;
  constructor(public dialogRef: MatDialogRef<DeviceDialogComponent>, @Inject(MAT_DIALOG_DATA) public dialogData
  , public editDialog: MatDialog, public sessionStorage: SessionStorage) {
   }

  ngOnInit(): void {
    this.checkToken();
    this.garage_id = this.dialogData.data['garage_id'];
    this.customer_id = this.dialogData.data['customer_id'];
    this.garage_code = this.dialogData.data['garage_code'];
    // console.log('在dialog;');
    // console.log(this.customer_id);
  }

  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }
}
