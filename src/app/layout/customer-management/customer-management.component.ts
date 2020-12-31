import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Customer, ApiResponse } from '../../shared/index';
import { MatTableDataSource, MatPaginator, MatDialog, MatSort } from '@angular/material';
import { UserService } from '../../services/user.service';
import { CustomerEditDialogComponent } from './customer-edit-dialog/customer-edit-dialog.component';
import { CustomerService } from '../../services/customer.service';
import { ManagementComponentInterface } from '../management-base';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs';
import { CustomerStepperDialogComponent } from './customer-stepper-dialog/customer-stepper-dialog.component';
import { CustomerDeviceIboxFormComponent } from './customer-device-ibox-form/customer-device-ibox-form.component';
import { CustomerDeviceDialogComponent } from './customer-device-dialog/customer-device-dialog.component';
import { TicketTransactionService } from '../../services/ticket-transaction.service';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css'],
  animations: [routerTransition()]
})

export class CustomerManagementComponent implements ManagementComponentInterface<Customer>, OnInit, AfterViewInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isEmptyData = false;
  txtTableFilter: string;

  data: ApiResponse<Customer[]>;
  dataSource: MatTableDataSource<Customer> = new MatTableDataSource<Customer>();
  displayedColumns = ['customer_code', 'company_name', 'email', 'contact_username', 'mobile'
  , 'customer_status', 'create_date', 'edit'];

  constructor(public customerService: CustomerService, public editDialog: MatDialog, public ticketTransactionService :TicketTransactionService) {  }

  ngOnInit() {
    this.refreshTable();
  }
  ngAfterViewInit() {
  }

  add() {
    const customer = new Customer();
    customer.customer_status = 1;
    const dialogRef = this.editDialog.open(CustomerStepperDialogComponent, {
      width: '1000px',
      data: customer
    });
    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }

  refreshTable() {
    this.customerService.getCustomers().subscribe(response => {
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

  edit(element: Customer) {
    const dialogRef = this.editDialog.open(CustomerEditDialogComponent, {
      width: '1000px',
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshTable();
    });
  }
  delete(id: number) {
    console.log(id);
    this.customerService.deleteCustomerById(id).subscribe(res => {
      this.ticketTransactionService.deleteCustomerTicketTransactionICash(id).subscribe(res => {});
      this.ticketTransactionService.deleteCustomerTicketTransactionIPass(id).subscribe(res => {});
      this.ticketTransactionService.deleteCustomerTicketTransactionHappyCash(id).subscribe(res => {});
      this.refreshTable();
    });
  }

  device(id: number) {
    const dialogRef = this.editDialog.open(CustomerDeviceDialogComponent, {
      width: '1000px',
      data: id
    });

    dialogRef.afterClosed().subscribe(result => {
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
