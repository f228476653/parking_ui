import { Component, OnInit, Inject , ElementRef, HostListener, Input } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GarageService } from '../../../services/garage.service';
import { DeviceService } from '../../../services/device.service';
import { ApiResponse, Garage, SessionStorage, CardType } from '../../../shared/index';
import { HttpClient } from '@angular/common/http';
import { PageData , PageMode} from '../../../shared/page-mode';
import { GarageDevice } from '../../../shared/garage_device';
import { TicketTransactionService } from '../../../services/ticket-transaction.service';
import { GarageTicketTransactionICash } from '../../../shared/garage-ticket-transaction-icash';
import { GarageTicketTransactionIPass } from '../../../shared/garage-ticket-transaction-ipass';
import { GarageTicketTransactionHappyCash } from '../../../shared/garage-ticket-transaction-happycash';
@Component({
  selector: 'app-garage-dialog',
  templateUrl: './garage-dialog.component.html',
  styleUrls: ['./garage-dialog.component.css']
})
export class GarageDialogComponent implements OnInit {
  isDisplaySaveResult = false;
  data: Garage;
  garage_device = new GarageDevice();
  garage_ticket_transaction_icash = new GarageTicketTransactionICash();
  garage_ticket_transaction_ipass = new GarageTicketTransactionIPass();
  garage_ticket_transaction_happycash = new GarageTicketTransactionHappyCash();
  Garage = new FormControl('', [Validators.required]);
  savedResponse: ApiResponse<Garage> = new ApiResponse<Garage>();
  citiesResponse: ApiResponse<any> = new ApiResponse<any>();
  test = 0;
  cardType = new CardType();
  savedResponse_icash: ApiResponse<GarageTicketTransactionICash> = new ApiResponse<GarageTicketTransactionICash>();
  savedResponse_ipass: ApiResponse<GarageTicketTransactionIPass> = new ApiResponse<GarageTicketTransactionIPass>();
  savedResponse_happycash: ApiResponse<GarageTicketTransactionHappyCash> = new ApiResponse<GarageTicketTransactionHappyCash>();
  // TODO 用陣列處理設備類型參數
  device_type = ['iBox'];
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<GarageDialogComponent>, @Inject(MAT_DIALOG_DATA) public pageData: PageData<Garage, PageMode>,
    public garageService: GarageService, public deviceService: DeviceService, public sessionStorage: SessionStorage,
    public ticketTransactionService: TicketTransactionService) {
   }

  ngOnInit(): void {
    this.checkToken();
    // this.getTaiwanCity();
    this.data = this.pageData.data;
  }

  /*
  show(){
    this.www = this.data.garage_name
  }
  */
  onNoClick(): void {
    this.dialogRef.close();
  }

  onCloseDailog(): void {
    this.dialogRef.close();
  }

  checkToken() {
    if (!this.sessionStorage.hasToken()) {
      this.onCloseDailog();
    }
  }

  save() {
    this.savedResponse = new ApiResponse();
    this.isDisplaySaveResult = false;
    if (this.data.create_account_id !== undefined) {
      this.garageService.updateGarage(this.data, this.garage_device, this.device_type).subscribe( res => {
        // console.log('新版修改看結果');
        // console.log(res);
        this.checkToken();
        this.savedResponse = res;
        this.isDisplaySaveResult = true;
        this.ticketTransactionService.updateGarageTicketTransactionICash(this.data, this.garage_ticket_transaction_icash).subscribe( res_icash => {
          this.checkToken();
          this.savedResponse_icash = res_icash;
        }, err_icash => {
          this.checkToken();
          this.savedResponse_icash = err_icash.error;
        });
        this.ticketTransactionService.updateGarageTicketTransactionIPass(this.data, this.garage_ticket_transaction_ipass).subscribe( res_ipass => {
          this.checkToken();
          this.savedResponse_ipass = res_ipass;
        }, err_ipass => {
          this.checkToken();
          this.savedResponse_ipass = err_ipass.error;
        });
        this.ticketTransactionService.updateGarageTicketTransactionHappyCash(this.data, this.garage_ticket_transaction_happycash).subscribe( res_happycash => {
          this.checkToken();
          this.savedResponse_happycash = res_happycash;
        }, err_happycash => {
          this.checkToken();
          this.savedResponse_happycash = err_happycash.error;
        });
      }, err => {
        this.checkToken();
        this.savedResponse = err;
        this.isDisplaySaveResult = true;
      });
    } else {
      this.checkToken();
      this.garageService.addGarage(this.data, this.garage_device, this.device_type).subscribe( res => {
        // console.log('新版新增看結果');
        // console.log(res);
        this.savedResponse = res;
        this.isDisplaySaveResult = true;
        if (this.garage_ticket_transaction_icash != null){
          this.ticketTransactionService.addGarageTicketTransactionICash(this.data, this.garage_ticket_transaction_icash).subscribe( res_icash => {
            this.checkToken();
            this.savedResponse_icash = res_icash;
          }, err_icash => {
            this.checkToken();
            this.savedResponse_icash = err_icash.error;
          });
        }
        if (this.garage_ticket_transaction_ipass != null){
          this.ticketTransactionService.addGarageTicketTransactionIPass(this.data, this.garage_ticket_transaction_ipass).subscribe( res_ipass => {
            this.checkToken();
            this.savedResponse_ipass = res_ipass;
          }, err_ipass => {
            this.checkToken();
            this.savedResponse_ipass = err_ipass.error;
          });
        }
        if (this.garage_ticket_transaction_happycash != null){
          this.ticketTransactionService.addGarageTicketTransactionHappyCash(this.data, this.garage_ticket_transaction_happycash).subscribe( res_happycash => {
            this.checkToken();
            this.savedResponse_happycash = res_happycash;
          }, err_happycash => {
            this.checkToken();
            this.savedResponse_happycash = err_happycash.error;
          });
        }
      }, err => {
        this.checkToken();
        this.savedResponse = err.error;
        this.isDisplaySaveResult = true;
      });
    }
  }
  getChildValue(e) {
    this.garage_device = e;
  }

  getChildValueICash(e) {
    this.garage_ticket_transaction_icash = e;
  }

  getChildValueIPass(e) {
    this.garage_ticket_transaction_ipass = e;
  }

  getChildValueHappyCash(e) {
    this.garage_ticket_transaction_happycash = e;
  }

  getErrorMessage() {
      return this.Garage.hasError('required') ? 'You must enter a value' :
          // this.Garage.hasError('email') ? 'Not a valid email' :
              '';
  }
  getTaiwanCity() {
    this.http.get('https://api.opencube.tw/twzipcode/get-citys').subscribe( x => {
      // console.log(x);
    });
  }
}


