import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SessionStorage } from '../../../shared';
import { FeeServiceService } from '../../../services/fee-service.service';

@Component({
  selector: 'app-complete-pricing-rule-dialog',
  templateUrl: './complete-pricing-rule-dialog.component.html',
  styleUrls: ['./complete-pricing-rule-dialog.component.css']
})
export class CompletePricingRuleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompletePricingRuleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData, public editDialog: MatDialog,
    public sessionStorage: SessionStorage, public feeService: FeeServiceService) { }

  ngOnInit() {
    console.log(this.dialogData);
  }

}
