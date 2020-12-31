import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Role, User, ApiResponse, Password, Customer, SessionStorage, Garage, GarageGroup
  , MapGarageToAccount, MapGarageGroupToAccount } from '../../../shared/index';
import { UserService } from '../../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { GarageService, GarageGroupService } from '../../../services';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  roleResponse = new ApiResponse<Role[]>();
  customerResponse = new ApiResponse<Customer[]>();
  isPasswordPass = true;
  isSuperUser = false;
  isCustomerRoot = false;
  mapGarageToAccount: MapGarageToAccount[];
  mapGarageGroupToAccount: MapGarageGroupToAccount[];

  @Input() savedResponse: ApiResponse<number>;
  @Input() data: User;
  @Input() garageResponse: ApiResponse<Garage[]>;
  @Input() garageGroupResponse: ApiResponse<GarageGroup[]>;
  @Input() password: Password;
  @Input() accountEditable = false;
  @Output() onSave = new EventEmitter<boolean>();

  constructor(public userService: UserService, public garageService: GarageService
    , public garageGroupService: GarageGroupService, public customerService: CustomerService, public sessionStorage: SessionStorage) { }

  ngOnInit() {
    this.getRoles();
    this.getCustomers();
    this.checkSuperUser();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges (changes): void {
    console.group('child ngOnChanges called.');
    console.log(changes);
    this.getRoles();
    this.getCustomers();
    this.checkSuperUser();
  }

  onCustomerChanges(e) {
    this.getRolesByCustomerId(e);
  }

  getRoles() {
    this.userService.getRoles().subscribe(response => {
      this.roleResponse = response;
    });
  }


  getCustomers() {
    this.customerService.getCustomers().subscribe( res => {
      this.customerResponse = res;
    });
  }

  getRolesByCustomerId(customer_id: number) {
    if (customer_id > 0) {
      this.userService.getRolesByCustomerId(customer_id).subscribe( x => {
        this.roleResponse = x;
      });
    }
  }

  save() {
    this.savedResponse = new ApiResponse<number>();
    this.onSave.emit();
  }

  checkPassword() {
    this.isPasswordPass = false;
    if (this.password && this. password.new_password && this.password.new_password === this.password.new_password1) {
      this.isPasswordPass = true;
    }
  }
  checkSuperUser() {
    this.isSuperUser = this.sessionStorage.getIsSuperUser();
    this.isCustomerRoot = this.sessionStorage.getIsCustomerRoot();
    if (this.isSuperUser !== true) {
      this.data.customer_id = this.sessionStorage.getCustomerId();
      console.log(this.data.customer_id);
    }
  }

}
