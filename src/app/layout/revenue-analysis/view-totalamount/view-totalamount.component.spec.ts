import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTotalamountComponent } from './view-totalamount.component';

describe('ViewTotalamountComponent', () => {
  let component: ViewTotalamountComponent;
  let fixture: ComponentFixture<ViewTotalamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTotalamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTotalamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
