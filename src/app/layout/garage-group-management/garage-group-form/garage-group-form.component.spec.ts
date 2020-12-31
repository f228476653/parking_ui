import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageGroupFormComponent } from './garage-group-form.component';

describe('GarageGroupFormComponent', () => {
  let component: GarageGroupFormComponent;
  let fixture: ComponentFixture<GarageGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
