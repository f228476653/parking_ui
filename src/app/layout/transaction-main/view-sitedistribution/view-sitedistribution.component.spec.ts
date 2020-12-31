import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSitedistributionComponent } from './view-sitedistribution.component';

describe('ViewSitedistributionComponent', () => {
  let component: ViewSitedistributionComponent;
  let fixture: ComponentFixture<ViewSitedistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSitedistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSitedistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
