import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { KeystoreService } from '../../../services/keystore.service';
import { PageData, KeystorePageMode } from '../../../shared/page-mode';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { KeystoreStatusEnum } from '../../../shared/keystore-status-enum';
import { Keystore, ApiResponse, SessionStorage } from '../../../shared/index';

@Component({
  selector: 'app-key-edit-dialog',
  templateUrl: './key-edit-dialog.component.html',
  styleUrls: ['./key-edit-dialog.component.css']
})
export class KeyEditDialogComponent implements OnInit {

  isDisplaySaveResult = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  savedResponse: ApiResponse<Keystore> = new ApiResponse<Keystore>();
  keystoreStatusResponse: ApiResponse<KeystoreStatusEnum> = new ApiResponse<KeystoreStatusEnum>();
  customerIdEditDisabled = true;
  isKeystoreStatusDisabled = true;
  data: Keystore = new Keystore();
  selectKeystoreStatus: KeystoreStatusEnum;

  constructor(
    public dialogRef: MatDialogRef<KeyEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public pageData: PageData<Keystore, KeystorePageMode>
    , public keystoreService: KeystoreService, public sessionStorage: SessionStorage) {
  }

  ngOnInit(): void {
      this.checkToken();

      this.data = this.pageData.data;
      if (this.data.keystore_id) {
        this.getKeystoreById(this.data.keystore_id);
      }

      this.checkEditableField();
      this.getKeystoreStatus();
  }

  getKeystoreById(id) {
    this.keystoreService.getKeystoresById(id).subscribe( res => {
      this.data = res.data;
    });
  }

  checkEditableField() {
    if (this.pageData) {
      this.customerIdEditDisabled = this.isKeystoreStatusDisabled = this.pageData.data.customer_id ? true : false;
      this.isKeystoreStatusDisabled = false;
      if (this.pageData.mode === KeystorePageMode.edit) {
        this.selectKeystoreStatus = this.pageData.data.key_status;
      }
    }
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }

  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }
  getKeystoreStatus() {
    this.keystoreService.get_keystores_status().subscribe( res => {
        this.keystoreStatusResponse = res;
    });
  }

  save() {
    this.savedResponse = new ApiResponse();
    this.isDisplaySaveResult = false;
    if (this.data && this.data.keystore_id > 0) {
      this.data = this.data as Keystore;
      this.data.key_status = this.selectKeystoreStatus;
      this.keystoreService.updateKeystore(this.data).subscribe( res => {
        this.checkToken();
        this.savedResponse = res;
        this.isDisplaySaveResult = true;
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
      });
    } else {
      this.data.key_status = this.selectKeystoreStatus;
      this.data = this.data as Keystore;
      this.keystoreService.addKeystore(this.data).subscribe( res => {
        this.checkToken();
        this.keystoreService.getKeystoresById(res.data).subscribe( result => {
          this.data = result.data;
          this.savedResponse = result;
        });
        this.isDisplaySaveResult = true;
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
      });
    }

  }
  getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :
              '';
    }
}
export class KeystoreStatusList {
  constructor(public index: string, public value: number) {}
}
