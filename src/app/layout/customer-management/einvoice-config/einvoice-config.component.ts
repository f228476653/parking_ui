import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EinvoiceConfig, einvoiceCompany_type } from '../../../shared/einvoice-config';
import { EinvoiceProvider , Customer, ApiResponse } from '../../../shared/index';
import { EinvoiceService } from '../../../services/einvoice.service';

@Component({
  selector: 'app-einvoice-config',
  templateUrl: './einvoice-config.component.html',
  styleUrls: ['./einvoice-config.component.css']
})
export class EinvoiceConfigComponent implements OnInit {
  @Input() einvoiceProvider: EinvoiceProvider;
  @Input() einvoiceConfigSmartPay: EinvoiceConfig;
  @Input() einvoiceConfigTwParking: EinvoiceConfig;
  @Input() einvoiceConfigDingTen: EinvoiceConfig;
  @Input() einvoiceConfigShiuanYang: EinvoiceConfig;
  @Input() customer: Customer;
  einvoiceConfigResponse: EinvoiceConfig[];
  einvoiceProviderType: FormGroup;
  constructor(private fb: FormBuilder, public einvoiceservice: EinvoiceService) {
  }

  ngOnInit() {
  }
  // 智付寶:1 /鼎天:2 /台灣聯通:3
  clearData_dingten(e) {
    if ( !e.checked ) {
      this.einvoiceConfigDingTen = new EinvoiceConfig();
      this.einvoiceConfigDingTen.is_used = 0;
      this.einvoiceConfigDingTen.einvoice_company = '2';
    } else {
      this.einvoiceConfigDingTen.is_used = 1;
      this.einvoiceConfigDingTen.einvoice_company = '2';
    }
  }

  clearData_smartpay(e) {
    if ( !e.checked ) {
      this.einvoiceConfigSmartPay.is_used = 0;
      this.einvoiceConfigSmartPay.einvoice_company = '1';
    } else {
      this.einvoiceConfigSmartPay.is_used = 1;
      this.einvoiceConfigSmartPay.einvoice_company = '1';
    }
  }

  clearData_shiuanyang(e) {
    if ( !e.checked ) {
      this.einvoiceConfigShiuanYang.is_used = 0;
      this.einvoiceConfigShiuanYang.einvoice_company = '4';
    } else {
      this.einvoiceConfigShiuanYang.is_used = 1;
      this.einvoiceConfigShiuanYang.einvoice_company = '4';
    }
  }

  clearData_taiwanparking(e) {
    if ( !e.checked ) {
      this.einvoiceConfigTwParking.is_used = 0;
      this.einvoiceConfigTwParking.einvoice_company = '3';
    } else {
      this.einvoiceConfigTwParking.is_used = 1;
      this.einvoiceConfigTwParking.einvoice_company = '3';
    }
  }
}
