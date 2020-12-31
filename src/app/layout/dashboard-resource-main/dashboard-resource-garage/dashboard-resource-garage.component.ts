import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard-resource-garage',
  templateUrl: './dashboard-resource-garage.component.html',
  styleUrls: ['./dashboard-resource-garage.component.css']
})
export class DashboardResourceGarageComponent implements OnInit {

  @Input() data: any;
  @Output() onSave = new EventEmitter<boolean>();
  displayedColumns = ['position', 'name', 'driveway_in', 'driveway_out', 'temp', 'disability', 'permanent'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  dataSource_2 = new MatTableDataSource<Element2>(ELEMENT_DATA_2);
  dataSource_3 = new MatTableDataSource<Element2>(ELEMENT_DATA_3);
  constructor() { }

  ngOnInit() {
  }
  onGarageClick() {
  }
}


export interface Element {
  name: string;
  position: string;
  driveway_in: number;
  driveway_out: number;
  temp: number;
  disability: number;
  permanent: number;
}

export interface Element2 {
  name: string;
  position: string;
  driveway_in: number;
  driveway_out: number;
  temp: number;
  disability: number;
  permanent: number;
}

export interface Element3 {
  name: string;
  position: string;
  driveway_in: number;
  driveway_out: number;
  temp: number;
  disability: number;
  permanent: number;
}


const ELEMENT_DATA: Element[] = [
  {position: '敦南一站', name: '1', driveway_in: 1, driveway_out: 1, temp: 51, disability: 1, permanent: 13},
  {position: '敦南二站', name: '1', driveway_in: 2, driveway_out: 1, temp: 11, disability: 1, permanent: 12} ,
  {position: '敦南三站', name: '1', driveway_in: 3, driveway_out: 1, temp: 13, disability: 3, permanent: 11},
  {position: '新生一站', name: '1', driveway_in: 1, driveway_out: 1, temp: 15, disability: 1, permanent: 9},
  {position: '新生二站', name: '1', driveway_in: 1, driveway_out: 1, temp: 16, disability: 1, permanent: 8},
  {position: '永康站', name: '1', driveway_in: 2, driveway_out: 1, temp: 71, disability: 1, permanent: 7},
  {position: '古亭站', name: '1', driveway_in: 1, driveway_out: 1, temp: 33, disability: 1, permanent: 5},
  {position: '中正紀念堂', name: '2', driveway_in: 2, driveway_out: 1, temp: 414, disability: 10, permanent: 10},
  {position: '師大一站', name: '1', driveway_in: 1, driveway_out: 1, temp: 50, disability: 3, permanent: 10}
];

const ELEMENT_DATA_2: Element2[] = [
  {position: '台中一站', name: '1', driveway_in: 1, driveway_out: 1, temp: 51, disability: 1, permanent: 13},
  {position: '台中二站', name: '1', driveway_in: 2, driveway_out: 1, temp: 11, disability: 1, permanent: 12} ,
  {position: '台中三站', name: '1', driveway_in: 3, driveway_out: 1, temp: 13, disability: 3, permanent: 11},
  {position: '台中四站', name: '1', driveway_in: 1, driveway_out: 1, temp: 15, disability: 1, permanent: 9},
  {position: '台中五站', name: '1', driveway_in: 1, driveway_out: 1, temp: 16, disability: 1, permanent: 8},
  {position: '台中六站', name: '1', driveway_in: 2, driveway_out: 1, temp: 71, disability: 1, permanent: 7},
  {position: '台中七站', name: '1', driveway_in: 1, driveway_out: 1, temp: 33, disability: 1, permanent: 5},
  {position: '台中八站', name: '2', driveway_in: 2, driveway_out: 1, temp: 414, disability: 10, permanent: 10},
  {position: '台中九站', name: '1', driveway_in: 1, driveway_out: 1, temp: 50, disability: 3, permanent: 10}
];

const ELEMENT_DATA_3: Element3[] = [
  {position: '台南一站', name: '1', driveway_in: 1, driveway_out: 1, temp: 51, disability: 1, permanent: 13},
  {position: '台南二站', name: '1', driveway_in: 2, driveway_out: 1, temp: 11, disability: 1, permanent: 12} ,
  {position: '台南三站', name: '1', driveway_in: 3, driveway_out: 1, temp: 13, disability: 3, permanent: 11},
  {position: '台南四站', name: '1', driveway_in: 1, driveway_out: 1, temp: 15, disability: 1, permanent: 9},
  {position: '台南五站', name: '1', driveway_in: 1, driveway_out: 1, temp: 16, disability: 1, permanent: 8},
  {position: '台南六站', name: '1', driveway_in: 2, driveway_out: 1, temp: 71, disability: 1, permanent: 7},
  {position: '台南七站', name: '1', driveway_in: 1, driveway_out: 1, temp: 33, disability: 1, permanent: 5},
  {position: '台南八站', name: '2', driveway_in: 2, driveway_out: 1, temp: 414, disability: 10, permanent: 10},
  {position: '台南九站', name: '1', driveway_in: 1, driveway_out: 1, temp: 50, disability: 3, permanent: 10}
];
