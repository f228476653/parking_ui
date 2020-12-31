import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Customer } from '../../../shared/customer';
import { ApiResponse, SessionStorage, RegPattern} from '../../../shared';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { debounceTime } from 'rxjs/operators';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { CustomerTicketTransactionIPass } from '../../../shared/customer-ticket-transaction-ipass';

@Component({
  selector: 'app-customer-ticket-transaction-ipass-form',
  templateUrl: './customer-ticket-transaction-ipass-form.component.html',
  styleUrls: ['./customer-ticket-transaction-ipass-form.component.css']
})
export class CustomerTicketTransactionIPassFormComponent implements OnInit {
    @Input() customer_id: number;

    @Input() readOnly: boolean;

    @Input() customerTicketTransactionIPass: CustomerTicketTransactionIPass;
    @Output() passCustomerTicketTransactionIPass = new EventEmitter<CustomerTicketTransactionIPass>();
    @Output() customerTicketTransactionIPassFormCheck  = new EventEmitter<boolean>();
    customerForm: FormGroup;
    // regPattern = new RegPattern();
    constructor(public ticketTransactionService: TicketTransactionService, public customerService: CustomerService, private _formBulider: FormBuilder) { }
  
    ngOnInit() {
        this.customerForm = this._formBulider.group({
          ip_address: [this.customerTicketTransactionIPass.ip_address, Validators.required],
          ip_port: [this.customerTicketTransactionIPass.ip_port, Validators.compose([Validators.required, Validators.min(0), Validators.max(65535), Validators.pattern("^[0-9]+$")])],
          account: [this.customerTicketTransactionIPass.account, Validators.required],
          password: [this.customerTicketTransactionIPass.password, Validators.required],
          upload_path: [this.customerTicketTransactionIPass.upload_path, Validators.compose([Validators.required, Validators.pattern("(^\/.+\/$)|(^\/$)")])],
          download_path: [this.customerTicketTransactionIPass.download_path, Validators.compose([Validators.required, Validators.pattern("(^\/.+\/$)|(^\/$)")])],
          ipass_company_id: [this.customerTicketTransactionIPass.ipass_company_id, Validators.compose([Validators.required, Validators.pattern("^[A-Z0-9]{4}$")])],
          ipass_system_id: [this.customerTicketTransactionIPass.ipass_system_id, Validators.compose([Validators.required, Validators.pattern("^[A-Z0-9]{2}$")])],
          status: [this.customerTicketTransactionIPass.status, Validators.required]
        });
        this.customerForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
          this.customerTicketTransactionIPassFormCheck .emit(this.customerForm.valid);
        });
      }
  
      get ip_address() { return this.customerForm.get('ip_address'); }
      get ip_port() { return this.customerForm.get('ip_port'); }
      get account() { return this.customerForm.get('account'); }
      get password() { return this.customerForm.get('password'); }
      get upload_path() { return this.customerForm.get('upload_path'); }
      get download_path() { return this.customerForm.get('download_path'); }
      get ipass_company_id() { return this.customerForm.get('ipass_company_id'); }
      get ipass_system_id() { return this.customerForm.get('ipass_system_id'); }
      get status() { return this.customerForm.get('status'); }
  
      test() {
        console.log(this.customerForm);
      }
  }
  