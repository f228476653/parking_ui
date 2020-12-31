import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageDialogComponent } from './garage-dialog.component';

describe('GarageDialogComponent', () => {
  let component: GarageDialogComponent;
  let fixture: ComponentFixture<GarageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
