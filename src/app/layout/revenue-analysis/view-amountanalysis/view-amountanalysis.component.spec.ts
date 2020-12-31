import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAmountanalysisComponent } from './view-amountanalysis.component';

describe('ViewAmountanalysisComponent', () => {
  let component: ViewAmountanalysisComponent;
  let fixture: ComponentFixture<ViewAmountanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAmountanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAmountanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
