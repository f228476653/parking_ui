import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Customer } from '../../../shared/customer';
import { ApiResponse, SessionStorage, RegPattern} from '../../../shared';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { debounceTime } from 'rxjs/operators';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { CustomerTicketTransactionHappyCash } from '../../../shared/customer-ticket-transaction-happycash';

@Component({
  selector: 'app-customer-ticket-transaction-happycash-form',
  templateUrl: './customer-ticket-transaction-happycash-form.component.html',
  styleUrls: ['./customer-ticket-transaction-happycash-form.component.css']
})
export class CustomerTicketTransactionHappyCashFormComponent implements OnInit {
    @Input() customer_id: number;

    @Input() readOnly: boolean;

    @Input() customerTicketTransactionHappyCash: CustomerTicketTransactionHappyCash;
    @Output() passCustomerTicketTransactionHappyCash = new EventEmitter<CustomerTicketTransactionHappyCash>();
    @Output() customerTicketTransactionHappyCashFormCheck  = new EventEmitter<boolean>();
    customerForm: FormGroup;
    // regPattern = new RegPattern();
    // tslint:disable-next-line:max-line-length
    constructor(public ticketTransactionService: TicketTransactionService, public customerService: CustomerService, private _formBulider: FormBuilder) { }

    ngOnInit() {
        this.customerForm = this._formBulider.group({
          ip_address: [this.customerTicketTransactionHappyCash.ip_address, Validators.required],
          ip_port: [this.customerTicketTransactionHappyCash.ip_port, Validators.compose([Validators.required, Validators.min(0), Validators.max(65535), Validators.pattern("^[0-9]+$")])],
          account: [this.customerTicketTransactionHappyCash.account, Validators.required],
          password: [this.customerTicketTransactionHappyCash.password, Validators.required],
          upload_path: [this.customerTicketTransactionHappyCash.upload_path, Validators.compose([Validators.required, Validators.pattern("(^\/.+\/$)|(^\/$)")])],
          download_path: [this.customerTicketTransactionHappyCash.download_path, Validators.compose([Validators.required, Validators.pattern("(^\/.+\/$)|(^\/$)")])],
          happycash_source_id: [this.customerTicketTransactionHappyCash.happycash_source_id, Validators.compose([Validators.required, Validators.pattern("^[A-Z0-9]{2}$")])],
          status: [this.customerTicketTransactionHappyCash.status, Validators.required]
        });
        this.customerForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
          this.customerTicketTransactionHappyCashFormCheck.emit(this.customerForm.valid);
        });
      }
  
      get ip_address() { return this.customerForm.get('ip_address'); }
      get ip_port() { return this.customerForm.get('ip_port'); }
      get account() { return this.customerForm.get('account'); }
      get password() { return this.customerForm.get('password'); }
      get upload_path() { return this.customerForm.get('upload_path'); }
      get download_path() { return this.customerForm.get('download_path'); }
      get happycash_source_id() { return this.customerForm.get('happycash_source_id'); }
      get status() { return this.customerForm.get('status'); }
  
      test() {
        console.log(this.customerForm);
      }
  }
  