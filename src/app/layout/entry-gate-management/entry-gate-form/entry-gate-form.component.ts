import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiResponse, EntryGate, Garage, SessionStorage } from '../../../shared/index';
import { EntryGateService } from '../../../services/index';
import { GarageService } from '../../../services/garage.service';

@Component({
  selector: 'app-entry-gate-form',
  templateUrl: './entry-gate-form.component.html',
  styleUrls: ['./entry-gate-form.component.css']
})
export class EntryGateFormComponent implements OnInit {

  roleResponse = new ApiResponse<EntryGate[]>();
  selectedEntryGate: number;

  @Input() savedResponse: ApiResponse<number>;
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  @Input() data: EntryGate;
  @Output() onSave = new EventEmitter<boolean>();
  constructor(public entryService: EntryGateService, public sessionStorage: SessionStorage, public garageService: GarageService) { }

  ngOnInit() {
    this.getGarages();
    if (this.data && this.data.entry_gate_id > 0) {
      this.selectedEntryGate = this.data.entry_gate_id;
    }
  }
  getCity(e) {

  }

  getGarages() {
    this.garageService.getGarages().subscribe(response => {
      this.garageResponse = response;
    });
  }
  save() {
    this.savedResponse = new ApiResponse<number>();
    this.onSave.emit();
  }
  getEntryGateSnExistOrNot() {

  }
}
