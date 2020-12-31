import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { KeystoreService } from '../../../services/keystore.service';
import { UserService } from '../../../services/user.service';
import { Keystore, User, SessionStorage } from '../../../shared/index';

@Component({
  selector: 'app-key-view-dialog',
  templateUrl: './key-view-dialog.component.html',
  styleUrls: ['./key-view-dialog.component.css']
})
export class KeyViewDialogComponent implements OnInit {

  isDisplaySaveResult = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  user: User = new User();
  constructor(
    public dialogRef: MatDialogRef<KeyViewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Keystore
    , public keystoreService: KeystoreService, public userSerive: UserService, public sessionStorage: SessionStorage) {

  }

  ngOnInit(): void {
    this.checkToken();
    this.getUser(this.data.create_account_id);
  }
  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  getUser(id) {
    this.userSerive.getUserById(id).subscribe(res => {
      if (res[0]) {
        this.user = res[0];
      }
    });
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }
}
