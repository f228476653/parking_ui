import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User, ApiResponse, Password, Role, SessionStorage, MapGarageToAccount, MapGarageGroupToAccount
  , Garage, GarageGroup } from '../../../shared/index';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { PageData, PageMode } from '../../../shared/page-mode';
import { GarageGroupService, GarageService } from '../../../services';

@Component({
  selector: 'app-account-edit-dialog',
  templateUrl: './account-edit-dialog.component.html',
  styleUrls: ['./account-edit-dialog.component.css']
})
export class AccountEditDialogComponent implements OnInit  {

  email = new FormControl('', [Validators.required, Validators.email]);
  savedResponse: ApiResponse<number> = new ApiResponse<number>();
  password: Password = new Password();
  roleResponse = new ApiResponse<Role[]>();
  data: User = new User();
  mapGarageGroupToAccount: MapGarageGroupToAccount[];
  mapGarageToAccount: MapGarageToAccount[];
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();

  accountDisabled = true;
  constructor(
    public dialogRef: MatDialogRef<AccountEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public pageData: PageData<User, PageMode>
    , public sessionStorage: SessionStorage, public userService: UserService, public garageService: GarageService
    , public garageGroupService: GarageGroupService) {
  }

  ngOnInit(): void {
    this.checkToken();
    this.data = this.pageData.data;
    if (this.data.account_id) {
        this.userService.getUserById(this.data.account_id).subscribe( x => {
          this.data = x[0];
        });
    }
    this.mapGarageGroupToAccount = [];
    this.mapGarageToAccount = [];
    this.accountDisabled = this.pageData.mode === PageMode.edit ? true : false;
    this.garageService.getGarages().subscribe( res => {
      this.garageResponse = res;
      if (this.data.account_id) { // if modify account
        this.userService.getMapGarageToAccountByAccountId(this.data.account_id).subscribe( r => {
          this.mapGarageToAccount = r.data;
              this.mapGarageToAccount.forEach( element => {
                this.garageResponse.data.forEach(e => {
                  if (element.garage_id === e.garage_id) {
                    e.checked = true;
                  }
                });
              });
        });
      }
    });

    this.garageGroupService.getGarageGroups().subscribe( res => {
      this.garageGroupResponse = res;
      if (this.data.account_id) {
        this.userService.getMapGarageGroupToAccountByAccountId(this.data.account_id).subscribe( r => {
            this.mapGarageGroupToAccount = r.data;
            this.mapGarageGroupToAccount.forEach(element => {
              this.garageGroupResponse.data.forEach(e => {
                if (element.garage_group_id === e.garage_group_id) {
                  e.checked = true;
                }
              });
            });
        });
      }
    });
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
  if (this.garageGroupResponse && this.garageGroupResponse.data) {
    this.mapGarageGroupToAccount = [];
    this.garageGroupResponse.data.forEach(e => {
      if (e.checked) {
          const x = new MapGarageGroupToAccount();
          x.garage_group_id = e.garage_group_id;
          if (this.data) {
            x.account_id = this.data.account_id;
          }
          this.mapGarageGroupToAccount.push(x);
      }
      console.log(this.mapGarageGroupToAccount);
    });
}
if (this.garageResponse && this.garageResponse.data) {
    this.mapGarageToAccount = [];
    this.garageResponse.data.forEach(e => {
        if (e.checked) {
            const x = new MapGarageToAccount();
            x.garage_id = e.garage_id;
            x.account_id = this.data.account_id;
            this.mapGarageToAccount.push(x);
        }
    });
}
  // this.savedResponse = new ApiResponse();
  // if ( this.sessionStorage.getIsSuperUser()) {
  //   this.data.customer_id = this.sessionStorage.getCustomerId();
  // }
  if (this.data.account_id > 0) {
    this.userService.updateUser(this.data, this.mapGarageToAccount, this.mapGarageGroupToAccount
      , this.password.new_password).subscribe( res => {
      this.checkToken();
      this.savedResponse = res;
    }, err => {
      this.checkToken();
      this.savedResponse = err.error;
    });
  } else {
    this.checkToken();
    this.userService.addUser(this.data, this.mapGarageToAccount, this.mapGarageGroupToAccount
      , this.password.new_password).subscribe( res => {
      this.savedResponse = res;
      this.data.account_id = res.data;
    }, err => {
      this.checkToken();
      this.savedResponse = err.error;
    });
  }
}

  getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
