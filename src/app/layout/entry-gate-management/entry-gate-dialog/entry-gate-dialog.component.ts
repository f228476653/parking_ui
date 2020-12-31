import { Component, OnInit, Inject } from '@angular/core';
import { ApiResponse, EntryGate, SessionStorage, PageData, PageMode } from '../../../shared/index';
import { Validators, FormControl } from '@angular/forms';
import { EntryGateService } from '../../../services/index';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-entry-gate-dialog',
  templateUrl: './entry-gate-dialog.component.html',
  styleUrls: ['./entry-gate-dialog.component.css']
})
export class EntryGateDialogComponent implements OnInit  {

  savedResponse: ApiResponse<EntryGate> = new ApiResponse<EntryGate>();
  data: EntryGate = new EntryGate();

  constructor(
    public dialogRef: MatDialogRef<EntryGateDialogComponent>, @Inject(MAT_DIALOG_DATA) public pageData: PageData<EntryGate, PageMode>
    , public sessionStorage: SessionStorage, public entryGateService: EntryGateService) {
    }

    ngOnInit(): void {
      this.checkToken();
      if (this.pageData.data && this.pageData.data.entry_gate_id) {
      this.entryGateService.getEntryGateById(this.pageData.data.entry_gate_id).subscribe( res => {
        this.data = res.data;
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

onCloseDailog(): void {
  this.dialogRef.close();
}
checkToken() {
  if (!this.sessionStorage.hasToken()) {
    this.onCloseDailog();
  }
}

save() {
  this.savedResponse = new ApiResponse();
  if (this.data.entry_gate_id > 0) {
    this.entryGateService.updateEntryGate(this.data).subscribe( res => {
      this.checkToken();
      this.savedResponse = res;
      this.data = this.savedResponse.data;
    }, err => {
      this.checkToken();
      this.savedResponse = err;
    });
  } else {
    this.entryGateService.addEntryGate(this.data).subscribe( res => {
      this.checkToken();
      this.savedResponse = res;
      this.data = this.savedResponse.data;
    }, err => {
      this.checkToken();
      this.savedResponse = err;
    });
  }
}
}
