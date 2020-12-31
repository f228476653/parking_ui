import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerService } from '../../../services/customer.service';
import { EinvoiceService } from '../../../services/einvoice.service';
import { FormGroup } from '@angular/forms';
import { ApiResponse, Customer, SessionStorage , EinvoiceProvider, CardType} from '../../../shared/index';
import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { CustomerTicketTransactionICash } from '../../../shared/customer-ticket-transaction-icash';
import { CustomerTicketTransactionIPass } from '../../../shared/customer-ticket-transaction-ipass';
import { CustomerTicketTransactionHappyCash } from '../../../shared/customer-ticket-transaction-happycash';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.css']
})
export class CustomerEditDialogComponent implements OnInit {
  @Input() ans: any;
  @Output() onSave = new EventEmitter<boolean>();
  @Output() afterSave = new EventEmitter<number>();
  @Output() customer_ticket_transaction_icash = new CustomerTicketTransactionICash();
  @Output() customer_ticket_transaction_ipass = new CustomerTicketTransactionIPass();
  @Output() customer_ticket_transaction_happycash = new CustomerTicketTransactionHappyCash();
  customer = this.data;
  isDisplaySaveResult = false;
  savedResponse: ApiResponse<number> = new ApiResponse<number>();
  savedResponse_einvoice: ApiResponse<number> = new ApiResponse<number>();
  cardType = new CardType();
  customerForm: FormGroup;
  savedResponse_icash: ApiResponse<CustomerTicketTransactionICash> = new ApiResponse<CustomerTicketTransactionICash>();
  savedResponse_ipass: ApiResponse<CustomerTicketTransactionIPass> = new ApiResponse<CustomerTicketTransactionIPass>();
  savedResponse_happycash: ApiResponse<CustomerTicketTransactionHappyCash> = new ApiResponse<CustomerTicketTransactionHappyCash>();
  constructor(
    public dialogRef: MatDialogRef<CustomerEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Customer
    , public customerService: CustomerService, public sessionStorage: SessionStorage
    , public einvoiceService: EinvoiceService, public ticketTransactionService: TicketTransactionService) {
  }

  ngOnInit(): void {
    this.checkToken();
    if (this.data.customer_id !== undefined) {
      this.ticketTransactionService.getCustomerTicketTransactionICash(this.data.customer_id).subscribe( res => {
        if(res.data != null){
          this.customer_ticket_transaction_icash = res.data;
          if (this.customer_ticket_transaction_icash.status == 1){
            this.cardType.iCash = true;
          }
        }
      }, err => {
      });
    }
    if (this.data.customer_id !== undefined) {
      this.ticketTransactionService.getCustomerTicketTransactionIPass(this.data.customer_id).subscribe( res => {
        if(res.data != null){
          this.customer_ticket_transaction_ipass = res.data;
          if (this.customer_ticket_transaction_ipass.status == 1){
            this.cardType.iPass = true;
          }
        }
      }, err => {
      });
    }
    if (this.data.customer_id !== undefined) {
      this.ticketTransactionService.getCustomerTicketTransactionHappyCash(this.data.customer_id).subscribe( res => {
        if(res.data != null){
          this.customer_ticket_transaction_happycash = res.data;
          if (this.customer_ticket_transaction_happycash.status == 1){
            this.cardType.YHDP = true;
          }
        }

      }, err => {
      });
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

  save() {
    this.savedResponse = new ApiResponse();
    this.isDisplaySaveResult = false;
    if (this.data.customer_id > 0) {
      this.customerService.updateCustomer(this.data).subscribe( res => {
        this.checkToken();
        this.savedResponse = res;
        this.isDisplaySaveResult = true;
        if (this.cardType.iCash) {
          this.ticketTransactionService.updateCustomerTicketTransactionICash(this.data, this.customer_ticket_transaction_icash).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        if (this.cardType.iPass) {
          this.ticketTransactionService.updateCustomerTicketTransactionIPass(this.data, this.customer_ticket_transaction_ipass).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        if (this.cardType.YHDP) {
          this.ticketTransactionService.updateCustomerTicketTransactionHappyCash(this.data, this.customer_ticket_transaction_happycash).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        this.afterSave.emit(this.savedResponse.data);
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
        this.isDisplaySaveResult = true;
      });

    } else {
      this.checkToken();
      this.customerService.addCustomer(this.data).subscribe( res => {
        this.savedResponse = res;
        this.data.customer_id = res.data;
        this.isDisplaySaveResult = true;
        if (this.cardType.iCash) {
          this.ticketTransactionService.addCustomerTicketTransactionICash(this.data, this.customer_ticket_transaction_icash).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        if (this.cardType.iPass) {
          this.ticketTransactionService.addCustomerTicketTransactionIPass(this.data, this.customer_ticket_transaction_ipass).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        if (this.cardType.YHDP) {
          this.ticketTransactionService.addCustomerTicketTransactionHappyCash(this.data, this.customer_ticket_transaction_happycash).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        this.afterSave.emit(this.savedResponse.data);
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
        this.isDisplaySaveResult = true;
      });
    }
  }

  getChildValueICash(e) {
    this.customer_ticket_transaction_icash = e;
  }

  getChildValueIPass(e) {
    this.customer_ticket_transaction_ipass = e;
  }

  getChildValueHappyCash(e) {
    this.customer_ticket_transaction_happycash = e;
  }

  getErrorMessage() {
  }
  onCompleteItem($event) {
    console.log($event);
  }

}
