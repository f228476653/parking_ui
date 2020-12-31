import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageExitSettingComponent } from './garage-exit-setting.component';

describe('GarageExitSettingComponent', () => {
  let component: GarageExitSettingComponent;
  let fixture: ComponentFixture<GarageExitSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageExitSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageExitSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
