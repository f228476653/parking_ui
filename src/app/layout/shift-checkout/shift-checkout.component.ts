import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ShiftCheckoutService } from '../../services/shift-checkout.service';
import { ShiftCheckout } from '../../shared/shift-checkout';
import { ViewCheckoutReportDialogComponent } from './view-checkout-report-dialog/view-checkout-report-dialog.component'; 
import { ApiResponse, PageData, PageMode } from '../../shared/index';
import { Garage, GarageGroup,  } from '../../shared';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { GarageService } from '../../services';
import { GarageGroupService } from './../../services/garage-group.service';
@Component({
  selector: 'app-shift-checkout',
  templateUrl: './shift-checkout.component.html',
  styleUrls: ['./shift-checkout.component.css']
})

export class ShiftCheckoutComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  query: ShiftCheckout = new ShiftCheckout();
  savedResponse: ApiResponse<ShiftCheckout[]> = new ApiResponse<ShiftCheckout[]>();
  dataSource: MatTableDataSource<ShiftCheckout> = new MatTableDataSource<ShiftCheckout>();
  displayedColumns = ['view', 'checkout_no', 'garage_name', 'clock_in_time', 'clock_out_time', 'checkout_amount', 'number_of_vehicles'];
  garageResponse: ApiResponse<Garage[]> = new ApiResponse<Garage[]>();
  garageGroupResponse: ApiResponse<GarageGroup[]> = new ApiResponse<GarageGroup[]>();
  query_date_start: Date;
  query_date_end: Date;

  constructor( public shiftCheckoutService: ShiftCheckoutService, public viewDialog: MatDialog,
    public garageGroupService: GarageGroupService , public garageService: GarageService) { }

  ngOnInit() {
    this.getGarageGroup();
  }

  getGarageGroup() {
    this.garageGroupService.getGarageGroupsByAccountId().subscribe( res => {
      console.log(res);
      this.garageGroupResponse = res;
    });
  }

  onGarageGroupChanged(e) {
    this.garageService.getGaragesByGarageGroupId(e.value).subscribe( x => {
      this.garageResponse = x;
      console.log(x);
    });
    delete this.query.garage_id;
  }


  search() {
    if ( this.query_date_start !== undefined ) {
      this.query.query_date_start = this.combineDateFormat(this.query_date_start);
    }
    if ( this.query_date_end !== undefined ) {
      this.query.query_date_end = this.combineDateFormat(this.query_date_end);
    }
    console.log(this.query);
    this.shiftCheckoutService.get_shift_checkout_by_condition(this.query).subscribe(res => {
      this.savedResponse = res;
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // if (this.savedResponse.data.length === 0) {
      //   this.isEmptyData = true;
      // } else {
      //   this.isEmptyData = false;
      // }
    });
  }
  view(element: ShiftCheckout) {
    console.log(element);
    const w = new PageData(element, PageMode.view);
    const dialogRef = this.viewDialog.open(ViewCheckoutReportDialogComponent, {
      width: '400px',
      data: w
    });

    dialogRef.afterClosed().subscribe(result => {
      this.search();
    });
  }

  combineDateFormat(query_date: Date) {
    const date = new Date(query_date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? '0' + String(date.getMonth() + 1) : String(date.getMonth() + 1);
    const day = date.getDate()  < 10 ? '0' + String(date.getDate()) : String(date.getDate()) ;
    return year + '-' + month + '-' + day ;
  }

  clearTableFilter() {
    this.query = new ShiftCheckout();
    this.query_date_start = undefined;
    this.query_date_end = undefined;
  }
}
