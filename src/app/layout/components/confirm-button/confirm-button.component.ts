import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-button',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.css']
})
export class ConfirmButtonComponent implements OnInit {

  @Output() deleteEvent = new EventEmitter<any>();
  status = 0;
  constructor() { }

  ngOnInit() {
  }
  onDeleteClick() {
    this.status = 1;
  }
  onConfirmClick() {
    this.deleteEvent.emit();
    this.status = 0;
  }
  onCancelClick() {
    this.status = 0;
  }
}
