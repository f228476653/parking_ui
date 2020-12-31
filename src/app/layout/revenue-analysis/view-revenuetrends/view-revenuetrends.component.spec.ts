import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRevenuetrendsComponent } from './view-revenuetrends.component';

describe('ViewRevenuetrendsComponent', () => {
  let component: ViewRevenuetrendsComponent;
  let fixture: ComponentFixture<ViewRevenuetrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRevenuetrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRevenuetrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
