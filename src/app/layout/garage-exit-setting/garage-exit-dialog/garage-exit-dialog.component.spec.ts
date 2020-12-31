import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageExitDialogComponent } from './garage-exit-dialog.component';

describe('GarageExitDialogComponent', () => {
  let component: GarageExitDialogComponent;
  let fixture: ComponentFixture<GarageExitDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageExitDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageExitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
