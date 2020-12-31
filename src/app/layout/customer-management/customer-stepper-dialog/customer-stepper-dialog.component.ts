import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SessionStorage, Role, PageMode, PageData, ApiResponse, Permission, Password, User, MapGarageGroupToAccount, MapGarageToAccount, Garage, GarageGroup } from '../../../shared/index';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { UserService, GarageService, GarageGroupService} from '../../../services';
import { turnover } from '../../dashboard-resource-main/dashboard-resource-main.component';


@Component({
  selector: 'app-customer-stepper-dialog',
  templateUrl: './customer-stepper-dialog.component.html',
  styleUrls: ['./customer-stepper-dialog.component.css']
})
export class CustomerStepperDialogComponent implements OnInit {
  @ViewChild('stepper') stepper: MatHorizontalStepper;
  isLinear =  true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  //customer
  customer_id: number;

  // role
  role = new Role();
  savedRoleResponse: ApiResponse<number> = new ApiResponse<number>();
  permissionRoleResponse: ApiResponse<Permission[]> = new ApiResponse<Permission[]>();
  RoleMode = 1;

  // account
  savedAccountResponse: ApiResponse<number> = new ApiResponse<number>();
  password: Password = new Password();
  account_data: User = new User();
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  accountDisabled = false;
  mapGarageGroupToAccount: MapGarageGroupToAccount[];
  mapGarageToAccount: MapGarageToAccount[];




  constructor( private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public pageData: PageData<Role, PageMode>
  , public dialogRef: MatDialogRef<CustomerStepperDialogComponent>, public userService: UserService
  , public sessionStorage: SessionStorage, public garageService: GarageService
  , public garageGroupService: GarageGroupService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getCustomerId(event) {
    this.ableisLinear();
    console.log(event);
    this.customer_id = event;
    if (this.isLinear === false ) {
    this.nextStep();
    }
  }

  stepClick(e) {
    console.log(e);
    if ( e.previouslySelectedIndex > e.selectedIndex ) {

    }

  }

  roleSave(e) {
    this.ableisLinear();
    console.log(e);
    e.role['customer_id'] = this.customer_id;
    this.role = e.role;
    console.log(this.role);
    this.permissionRoleResponse = e.permissionResponse;
    this.sessionStorage.hasToken();
    const permission = this.gatherPermission(e.permissionResponse, [], 0);
    this.savedRoleResponse = new ApiResponse();
    if (this.role.role_id > 0) {
      this.userService.updateRole(e.role, permission).subscribe( res => {
        this.savedRoleResponse = res;
      }, err => {
        this.savedRoleResponse = err.error;
      });
    } else {
      this.userService.addRole(e.role, permission).subscribe( res => {
        this.savedRoleResponse = res;
      }, err => {
        this.savedRoleResponse = err.error;
      });
    }
    this.account_data = new User;
    this.initAccount();
    this.nextStep();
  }

  nextStep() {
    this.stepper.next();
    this.disableisLinear();
  }
  ableisLinear() {
    this.stepper.linear = false;
    this.isLinear =  false;
  }

  disableisLinear() {
    this.stepper.linear = true;
    this.isLinear =  true;
  }

  previousStep() {
    this.stepper.previous();
  }

  public gatherPermission(list: Permission[], result: Permission[], role_id: number) {
    for (let _i = 0; _i < list.length; _i += 1) {
        if (list[_i].checked === true) {
          const k = new Permission();
          k.permission_id = list[_i].permission_id;
          result.push(k);
        }
    }
    return result;
  }

accountSave() {
  this.ableisLinear();
  if (this.garageGroupResponse && this.garageGroupResponse.data) {
      this.mapGarageGroupToAccount = [];
      this.garageGroupResponse.data.forEach(e => {
        if (e.checked) {
            const x = new MapGarageGroupToAccount();
            x.garage_group_id = e.garage_group_id;
            if (this.account_data) {
              x.account_id = this.account_data.account_id;
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
              x.account_id = this.account_data.account_id;
              this.mapGarageToAccount.push(x);
          }
      });
  }
    // this.savedResponse = new ApiResponse();
    // if ( this.sessionStorage.getIsSuperUser()) {
    //   this.data.customer_id = this.sessionStorage.getCustomerId();
    // }
    if (this.account_data.account_id > 0) {
      this.userService.updateUser(this.account_data, this.mapGarageToAccount, this.mapGarageGroupToAccount
        , this.password.new_password).subscribe( res => {
        this.checkToken();
        this.savedAccountResponse = res;
      }, err => {
        this.checkToken();
        this.savedAccountResponse = err.error;
      });
    } else {
      this.checkToken();
      this.userService.addUser(this.account_data, this.mapGarageToAccount, this.mapGarageGroupToAccount
        , this.password.new_password).subscribe( res => {
        this.savedAccountResponse = res;
        this.account_data.account_id = res.data;
        this.nextStep();
      }, err => {
        this.checkToken();
        this.savedAccountResponse = err.error;
      });
    }
  }


  checkToken() {
    // 檢查帳號是否正確 如不正確關掉dialog
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  initAccount() {
    if (this.account_data.account_id) {
        this.userService.getUserById(this.account_data.account_id).subscribe( x => {
          this.account_data = x[0];
        });
    }
    this.mapGarageGroupToAccount = [];
    this.mapGarageToAccount = [];
    this.accountDisabled = this.pageData.mode === PageMode.edit ? true : false;
    this.garageService.getGarages().subscribe( res => {
      this.garageResponse = res;
      if (this.account_data.account_id) { // if modify account
        this.userService.getMapGarageToAccountByAccountId(this.account_data.account_id).subscribe( r => {
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
      if (this.account_data.account_id) {
        this.userService.getMapGarageGroupToAccountByAccountId(this.account_data.account_id).subscribe( r => {
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

  onCloseDailog(): void {
    this.dialogRef.close();
  }
}
