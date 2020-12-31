import {MatButtonModule, MatCheckboxModule, MatTableDataSource, MatTable, MatTableModule
    , MatFormFieldModule, MatInputModule, MatPaginatorModule, MatIconModule, MatDialogModule
  , MatSidenavModule, MatRadioModule
  , MatSortModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule, MatListModule, MatExpansionModule, MatMenuModule, MatChipsModule, MatTabsModule
  , MatCardModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule
    , MatPaginatorModule, MatIconModule, MatDialogModule, MatSidenavModule, MatSortModule, MatRadioModule
  , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatListModule, MatExpansionModule
, MatMenuModule, MatChipsModule, MatTabsModule, MatSnackBarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatFormFieldModule, MatInputModule
    , MatPaginatorModule, MatIconModule, MatDialogModule, MatSidenavModule, MatSortModule, MatRadioModule
  , MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatListModule, MatExpansionModule
, MatMenuModule, MatChipsModule, MatTabsModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule],
})
export class AppMaterialModule { }
