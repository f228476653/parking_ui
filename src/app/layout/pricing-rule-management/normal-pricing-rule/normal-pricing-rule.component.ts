import { Component, OnInit } from '@angular/core';
import { PageData, Garage, PageMode } from '../../../shared';
import { CompletePricingRuleDialogComponent } from '../complete-pricing-rule-dialog/complete-pricing-rule-dialog.component';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { FeeDialogComponent } from '../../garage-management/fee-dialog/fee-dialog.component';
import { FeeServiceService } from '../../../services/fee-service.service';
import { PricingRuleListView } from '../../../shared/fee';

@Component({
  selector: 'app-normal-pricing-rule',
  templateUrl: './normal-pricing-rule.component.html',
  styleUrls: ['./normal-pricing-rule.component.css']
})
export class NormalPricingRuleComponent implements OnInit {
  displayedColumns = ['fee_id', 'fee_name', 'introduction', 'status', 'update_time', 'update_user', 'edit'];
  dialogWidth = '1000px';
  dataSource: MatTableDataSource<PricingRuleListView> = new MatTableDataSource<PricingRuleListView>();
  constructor(public editDialog: MatDialog, public feeService: FeeServiceService) { }

  ngOnInit() {
    // TODO 讀取該業者及root的預設費率
    this.refreshTable();
  }

  refreshTable() {
    this.feeService.get_pricing_rule_list().subscribe(response => {
      this.dataSource = new MatTableDataSource(response.data);
    });
  }

  addPricingRule(pricing_mode: number) {
    if (pricing_mode === 1) {
      const data = {'name': 'aa'};
      const d = new PageData(data, PageMode.fee);
      const dialogRef = this.editDialog.open(CompletePricingRuleDialogComponent, {
        width: this.dialogWidth,
        data: d
      });
      dialogRef.afterClosed().subscribe(result => {
        this.refreshTable();
      });
    } else if (pricing_mode === 2) {
        // // if ( this.selected_fee !== undefined) {
        // // TODO 數字ㄌ
        // const d = {'car_type': 'm', 'garage_id': '2'};
        // // console.log(d);
        // const dialogRef = this.editDialog.open(FeeDialogComponent, {
        //   width: this.dialogWidth,
        //   data: d
        // });
        // dialogRef.afterClosed().subscribe(result => {
        //   // console.log(result);
        //   this.refreshTable();
        // });
    }
  }

  info() {
    // TODO 顯示該參數一些資訊 不可以改
    // 要能知道那些場站(garage)設備(device) 正在使用這些參數
    // 費率規則的細節描述 字數不限
  }

  edit() {
    // TODO 編輯費率參數 只能給業者參數使用
  }

  delete(garage_id: number) {
    // TODO 刪除該費率 只有業者參數能使用
    // 必須是沒在使用(status == unuse)的費率才能刪除
  }

}
