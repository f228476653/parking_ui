import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { ApiResponse, SessionStorage, RegPattern} from '../../../shared/index';
import { GarageService } from '../../../services/garage.service';
import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { GarageTicketTransactionICash } from '../../../shared/garage-ticket-transaction-icash';

import { characterLengthValidator } from '../../../shared/form-valiadtor';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { NativeDateAdapter } from '@angular/material';

const MY_DATE_FORMATS = {
  parse: {
      dateInput: {month: 'short', year: 'numeric'}
  },
  display: {
      // dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};
export class MyDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat == "input") {
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          return year + this._to2digit(month)  + this._to2digit(day);
      } else {
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          return year + "/" + this._to2digit(month);
      }
  }

  private _to2digit(n: number) {
      return ('00' + n).slice(-2);
  } 
}

@Component({
  selector: 'app-garage-ticket-transaction-icash-form',
  templateUrl: './garage-ticket-transaction-icash-form.component.html',
  styleUrls: ['./garage-ticket-transaction-icash-form.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
],
})
export class GarageTicketTransactionICashFormComponent implements OnInit {
    @Input() customer_id: number;
    @Input() garage_code: number;
   

    @Input() readOnly: boolean;

    @Input() garageTicketTransactionICash: GarageTicketTransactionICash;
    @Output() passGarageTciketTransactionICash = new EventEmitter<GarageTicketTransactionICash>();
    @Output() garageTicketTransactionICashFormCheck = new EventEmitter<boolean>();
    garageForm: FormGroup;
    // regPattern = new RegPattern();
    minDate = new Date(2014, 0, 1);
    maxDate = new Date(9999, 11, 31);
    
    constructor(public ticketTransactionService: TicketTransactionService, public garageService: GarageService, private _formBulider: FormBuilder) { }

    
    ngOnInit() {
        this.garageForm = this._formBulider.group({
          icash_garage_code: [this.garageTicketTransactionICash.icash_garage_code, Validators.compose([Validators.required, Validators.pattern("^[A-Z0-9]{0,8}$")])],
          icash_garage_name: [this.garageTicketTransactionICash.icash_garage_name, Validators.compose([Validators.required, characterLengthValidator(30)])],
          icash_garage_abbreviated_name: [this.garageTicketTransactionICash.icash_garage_abbreviated_name, Validators.compose([Validators.required, characterLengthValidator(10)])],
          icash_garage_effective_begin_date: [this.garageTicketTransactionICash.icash_garage_effective_begin_date, Validators.required],
          icash_garage_effective_end_date: [this.garageTicketTransactionICash.icash_garage_effective_end_date, Validators.required],
          icash_garage_opening_day: [this.garageTicketTransactionICash.icash_garage_opening_day, Validators.required],
          icash_garage_saleable_day: [this.garageTicketTransactionICash.icash_garage_saleable_day, Validators.required],
          icash_garage_closing_day: [this.garageTicketTransactionICash.icash_garage_closing_day, Validators.required],
          icash_garage_postal_code: [this.garageTicketTransactionICash.icash_garage_postal_code, Validators.compose([Validators.required, Validators.pattern("^([AZ0-9\-]){0,8}$")])],
          icash_garage_address: [this.garageTicketTransactionICash.icash_garage_address, Validators.compose([Validators.required, characterLengthValidator(60)])],
          icash_garage_telephone_area_code: [this.garageTicketTransactionICash.icash_garage_telephone_area_code, Validators.compose([Validators.required, Validators.pattern("^[0-9]{0,3}$")])],
          icash_garage_telephone: [this.garageTicketTransactionICash.icash_garage_telephone, Validators.compose([Validators.required, Validators.pattern("^[0-9]{0,12}$")])],
          status: [this.garageTicketTransactionICash.status, Validators.required]
        });
        this.garageForm.statusChanges.pipe(debounceTime(1000)).subscribe( e => {
          this.garageTicketTransactionICashFormCheck.emit(this.garageForm.valid);
        });
      }
  
      get icash_garage_code() { return this.garageForm.get('icash_garage_code'); }
      get icash_garage_name() { return this.garageForm.get('icash_garage_name'); }
      get icash_garage_abbreviated_name() { return this.garageForm.get('icash_garage_abbreviated_name'); }
      get icash_garage_effective_begin_date() { return this.garageForm.get('icash_garage_effective_begin_date'); }
      get icash_garage_effective_end_date() { return this.garageForm.get('icash_garage_effective_end_date'); }
      get icash_garage_opening_day() { return this.garageForm.get('icash_garage_opening_day'); }
      get icash_garage_saleable_day() { return this.garageForm.get('icash_garage_saleable_day'); }
      get icash_garage_closing_day() { return this.garageForm.get('icash_garage_closing_day'); }
      get icash_garage_postal_code() { return this.garageForm.get('icash_garage_postal_code'); }
      get icash_garage_address() { return this.garageForm.get('icash_garage_address'); }
      get icash_garage_telephone_area_code() { return this.garageForm.get('icash_garage_telephone_area_code'); }
      get icash_garage_telephone() { return this.garageForm.get('icash_garage_telephone'); }
      get status() { return this.garageForm.get('status'); }

      test() {
        console.log(this.garageForm);
      }
  }
