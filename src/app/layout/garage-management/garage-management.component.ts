import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { ManagementComponentInterface } from '../management-base';
import { GarageService } from '../../services/garage.service';
import { PageData, PageMode } from '../../shared/page-mode';
import { routerTransition } from '../../router.animations';
import { ApiResponse, Garage, SessionStorage, RegPattern } from '../../shared/index';
import { GarageDialogComponent } from './garage-dialog/garage-dialog.component';
import { DeviceDialogComponent } from './device-dialog/device-dialog.component';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { TicketTransactionService } from '../../services/ticket-transaction.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-garage-management',
  templateUrl: './garage-management.component.html',
  styleUrls: ['./garage-management.component.css'],
  animations: [routerTransition()]
})

export class GarageManagementComponent implements ManagementComponentInterface<Garage>, OnInit {
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  items = [1, 2, 3, 4, 5];
  cc = true;
  dataSource2 = ELEMENT_DATA;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ip_list = [];
  txtTableFilter: string;
  isEmptyData = false;
  data: ApiResponse<Garage[]>;
  dataSource: MatTableDataSource<Garage> = new MatTableDataSource<Garage>();
  displayedColumns = ['garage_id', 'company_name', 'garage_code', 'garage_name', 'city_name', 'address1', 'address2'
    , 'create_date', 'edit'];
  dialogWidth = '1000px';
  regPattern = new RegPattern();
  testForm: FormGroup;
  printErr: boolean;
  constructor(public garageService: GarageService, public editDialog: MatDialog, public sessionStorage: SessionStorage,
    public ticketTransactionService: TicketTransactionService) {
     const test = new Garage();
   }
  get test1() { return this.testForm.get('haha1'); }

  validator(e) {
    // console.log(this.test1);
  //   const subscription = fromEvent(nameInput, 'keydown')
  // .subscribe((e: KeyboardEvent) => {
  //   if (e.keyCode === ESC_KEY) {
  //     nameInput.value = '';
  //   }
  // });
  }

  ngOnInit() {
    // this.testForm.get('haha1').valueChanges.subscribe( r => {
      //   this.garageService.getGarages().subscribe ( res => {
        //     console.log(res);
        //     // for (const i of res.data) {
          //     //   console.log(i['garage_code']);
          //     // }
          //   });
          // });
    this.refreshTable();
  }

  refreshTable() {
      this.garageService.getGarages().subscribe(response => {
        this.data = response;
        this.dataSource = new MatTableDataSource(response.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        if (this.data.data.length === 0) {
          this.isEmptyData = true;
        } else {
          this.isEmptyData = false;
        }
      });
  }

  add() {
    const d = new PageData(new Garage(), PageMode.add);
    const dialogRef = this.editDialog.open(GarageDialogComponent, {
      width: this.dialogWidth,
      data: d
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  edit(element: Garage) {
    delete element['company_name'];
    const d = new PageData(element, PageMode.edit);
    const dialogRef = this.editDialog.open(GarageDialogComponent, {
      width: this.dialogWidth,
      data: d
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  device(element: Garage) {
    const info = {'customer_id': element['customer_id'], 'garage_id': element['garage_id'], 'garage_code': element['garage_code']};
    const d = new PageData(info, PageMode.device);
    console.log('garage managements');
    console.log(info);
    const dialogRef = this.editDialog.open(DeviceDialogComponent, {
      width: this.dialogWidth,
      data: d
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }
  delete(garage_id: number) {
    this.garageService.deleteGarageById(garage_id).subscribe(res => {
      this.ticketTransactionService.deleteGarageTicketTransactionICash(garage_id).subscribe(res => {});
      this.ticketTransactionService.deleteGarageTicketTransactionIPass(garage_id).subscribe(res => {});
      this.ticketTransactionService.deleteGarageTicketTransactionHappyCash(garage_id).subscribe(res => {});
      this.refreshTable();
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  clearTableFilter() {
    this.dataSource.filter = this.txtTableFilter = '';
  }
}
