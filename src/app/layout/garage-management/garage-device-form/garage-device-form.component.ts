import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { RegPattern} from '../../../shared/index';
import { GarageService } from '../../../services/garage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GarageDevice } from '../../../shared/garage_device';
import { DeviceService } from '../../../services/device.service';
// import { taxNumberValidator } from '../../../shared/form-valiadtor';


@Component({
  selector: 'app-garage-device-form',
  templateUrl: './garage-device-form.component.html',
  styleUrls: ['./garage-device-form.component.css']
})
export class GarageDeviceFormComponent implements OnInit {
  @Input() readOnly: boolean;
  @Input() garageDevice: GarageDevice;
  @Input() display: boolean;
  @Input() customer_garage_id;
  @Output() passGarageDevice = new EventEmitter<GarageDevice>();
  @Output() garageDeviceFormCheck = new EventEmitter<boolean>();
  ibox_enable = true;
  iPass_card_case = [2, 4, 6, 7];
  garageForm: FormGroup;
  regPattern = new RegPattern();
  temp = true;
  constructor(public deviceService: DeviceService, public garageService: GarageService, private _formBulider: FormBuilder) { }

  ngOnInit() {
      this.garageForm = this._formBulider.group({
        // printer: [{value: this.garageDevice.printer, disabled: this.readOnly}, Validators.required],
        // pos_no: [this.garageDevice.pos_no, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        // eid_store_no: [this.garageDevice.eid_store_no, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        store_no: [this.garageDevice.store_no, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma)]],
        // tax_id_num: [this.garageDevice.tax_id_num, [Validators.required, taxNumberValidator()]],
        // ntp_server: [this.garageDevice.ntp_server, [Validators.required, Validators.pattern(this.regPattern.IPV4)]],
        plid: [this.garageDevice.plid, [Validators.required, Validators.pattern(this.regPattern.withoutSpaceAndComma),
          Validators.maxLength(4), Validators.minLength(4)]]
      });
      this.garageForm.statusChanges.subscribe( e => {
        this.garageDeviceFormCheck.emit(this.garageForm.valid);
      });
    }

    // get pos_no() { return this.garageForm.get('pos_no'); }
    // get eid_store_no() { return this.garageForm.get('eid_store_no'); }
    get store_no() { return this.garageForm.get('store_no'); }
    // get tax_id_num() { return this.garageForm.get('tax_id_num'); }
    // get ntp_server() { return this.garageForm.get('ntp_server'); }
    get plid() { return this.garageForm.get('plid'); }

    test() {
      console.log(this.garageForm);
    }
}
