import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Customer } from '../../../shared/customer';
import { ApiResponse, SessionStorage, RegPattern} from '../../../shared';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { debounceTime } from 'rxjs/operators';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { CustomerTicketTransactionICash } from '../../../shared/customer-ticket-transaction-icash';

import { taxNumberValidator } from '../../../shared/form-valiadtor';

@Component({
  selector: 'app-customer-ticket-transaction-icash-form',
  templateUrl: './customer-ticket-transaction-icash-form.component.html',
  styleUrls: ['./customer-ticket-transaction-icash-form.component.css']
})
export class CustomerTicketTransactionICashFormComponent implements OnInit {
    @Input() customer_id: number;

    @Input() readOnly: boolean;

    @Input() customerTicketTransactionICash: CustomerTicketTransactionICash;
    @Output() passCustomerTicketTransactionICash = new EventEmitter<CustomerTicketTransactionICash>();
    @Output() customerTicketTransactionICashFormCheck = new EventEmitter<boolean>();
    customerForm: FormGroup;
    // regPattern = new RegPattern();
    constructor(public ticketTransactionService: TicketTransactionService, public customerService: CustomerService, private _formBulider: FormBuilder) { }
  
    ngOnInit() {
        this.customerForm = this._formBulider.group({
          ip_address: [this.customerTicketTransactionICash.ip_address, Validators.required],
          ip_port: [this.customerTicketTransactionICash.ip_port, Validators.compose([Validators.required, Validators.min(0), Validators.max(65535), Validators.pattern("^[0-9]+$")])],
          account: [this.customerTicketTransactionICash.account, Validators.required],
          password: [this.customerTicketTransactionICash.password, Validators.required],
          upload_path: [this.customerTicketTransactionICash.upload_path, Validators.compose([Validators.required, Validators.pattern("(^\/.+\/$)|(^\/$)")])],
          download_path: [this.customerTicketTransactionICash.download_path, Validators.compose([Validators.required, Validators.pattern("(^\/.+\/$)|(^\/$)")])],
          icash_customer_tax_id: [this.customerTicketTransactionICash.icash_customer_tax_id, Validators.compose([Validators.required, taxNumberValidator()])],
          status: [this.customerTicketTransactionICash.status, Validators.required]
        });
        this.customerForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
          this.customerTicketTransactionICashFormCheck .emit(this.customerForm.valid);
        });
      }
  
      get ip_address() { return this.customerForm.get('ip_address'); }
      get ip_port() { return this.customerForm.get('ip_port'); }
      get account() { return this.customerForm.get('account'); }
      get password() { return this.customerForm.get('password'); }
      get upload_path() { return this.customerForm.get('upload_path'); }
      get download_path() { return this.customerForm.get('download_path'); }
      get icash_customer_tax_id() { return this.customerForm.get('icash_customer_tax_id'); }
      get status() { return this.customerForm.get('status'); }
  
      test() {
        console.log(this.customerForm);
      }
  }
  