import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ApiResponse, SessionStorage, RegPattern} from '../../../shared/index';
import { GarageService } from '../../../services/garage.service';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { GarageTicketTransactionIPass } from '../../../shared/garage-ticket-transaction-ipass';

@Component({
  selector: 'app-garage-ticket-transaction-ipass-form',
  templateUrl: './garage-ticket-transaction-ipass-form.component.html',
  styleUrls: ['./garage-ticket-transaction-ipass-form.component.css']
})
export class GarageTicketTransactionIPassFormComponent implements OnInit {
    @Input() readOnly: boolean;

    @Input() garageTicketTransactionIPass: GarageTicketTransactionIPass;
    @Output() passGarageTciketTransactionIPass = new EventEmitter<GarageTicketTransactionIPass>();
    @Output() garageTicketTransactionIPassFormCheck = new EventEmitter<boolean>();
    garageForm: FormGroup;
    // regPattern = new RegPattern();
    constructor(public ticketTransactionService: TicketTransactionService, public garageService: GarageService, private _formBulider: FormBuilder) { }
  
    ngOnInit() {
        this.garageForm = this._formBulider.group({
          ipass_garage_code_decimal: [this.garageTicketTransactionIPass.ipass_garage_code_decimal, Validators.compose([Validators.required, Validators.pattern("^[0-9]{0,5}$")])],
          ipass_garage_code_hexadecmial: [this.garageTicketTransactionIPass.ipass_garage_code_hexadecmial, Validators.compose([Validators.required, Validators.pattern("^[A-Z0-9]{4}$")])],
          status: [this.garageTicketTransactionIPass.status, Validators.required]
        });
        this.garageForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
          this.garageTicketTransactionIPassFormCheck.emit(this.garageForm.valid);
        });
      }
  
      get ipass_garage_code_decimal() { return this.garageForm.get('ipass_garage_code_decimal'); }
      get ipass_garage_code_hexadecmial() { return this.garageForm.get('ipass_garage_code_hexadecmial'); }
      get status() { return this.garageForm.get('status'); }
  
      test() {
        console.log(this.garageForm);
      }
  }
  