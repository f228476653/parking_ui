import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ApiResponse, SessionStorage, RegPattern} from '../../../shared/index';
import { GarageService } from '../../../services/garage.service';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { GarageTicketTransactionHappyCash } from '../../../shared/garage-ticket-transaction-happycash';

@Component({
  selector: 'app-garage-ticket-transaction-happycash-form',
  templateUrl: './garage-ticket-transaction-happycash-form.component.html',
  styleUrls: ['./garage-ticket-transaction-happycash-form.component.css']
})
export class GarageTicketTransactionHappyCashFormComponent implements OnInit {
    @Input() readOnly: boolean;

    @Input() garageTicketTransactionHappyCash: GarageTicketTransactionHappyCash;
    @Output() passGarageTciketTransactionHappyCash = new EventEmitter<GarageTicketTransactionHappyCash>();
    @Output() garageTicketTransactionHappyCashFormCheck = new EventEmitter<boolean>();
    garageForm: FormGroup;
    // regPattern = new RegPattern();
    constructor(public ticketTransactionService: TicketTransactionService, public garageService: GarageService, private _formBulider: FormBuilder) { }
  
    ngOnInit() {
        this.garageForm = this._formBulider.group({
          happycash_garage_code: [this.garageTicketTransactionHappyCash.happycash_garage_code, Validators.compose([Validators.required, Validators.pattern("^[0-9]{0,15}$")])],
          status: [this.garageTicketTransactionHappyCash.status, Validators.required]
        });
        this.garageForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
          this.garageTicketTransactionHappyCashFormCheck.emit(this.garageForm.valid);
        });
      }
  
      get happycash_garage_code() { return this.garageForm.get('happycash_garage_code'); }
      get status() { return this.garageForm.get('status'); }
  
      test() {
        console.log(this.garageForm);
      }
  }
  