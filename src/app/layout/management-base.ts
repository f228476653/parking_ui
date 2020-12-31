import { OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ApiResponse } from '../shared/index';

export interface ManagementComponentInterface<T> {
     txtTableFilter: string;
     isEmptyData: boolean;
     data: ApiResponse<T[]>;
     displayedColumns: string[];
     dataSource: MatTableDataSource<T>;
}
