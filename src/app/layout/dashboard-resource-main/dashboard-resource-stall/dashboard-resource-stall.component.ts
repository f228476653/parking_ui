import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-resource-stall',
  templateUrl: './dashboard-resource-stall.component.html',
  styleUrls: ['./dashboard-resource-stall.component.css']
})
export class DashboardResourceStallComponent implements OnInit {

  @Input() data: any;
  @Output() onSave = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
}
