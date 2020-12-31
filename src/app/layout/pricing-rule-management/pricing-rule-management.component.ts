import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-pricing-rule-management',
  templateUrl: './pricing-rule-management.component.html',
  styleUrls: ['./pricing-rule-management.component.css'],
  animations: [routerTransition()]
})
export class PricingRuleManagementComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  refreshTable() {
  }



}
