import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageGroupDialogComponent } from './garage-group-dialog.component';

describe('GarageGroupDialogComponent', () => {
  let component: GarageGroupDialogComponent;
  let fixture: ComponentFixture<GarageGroupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageGroupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
