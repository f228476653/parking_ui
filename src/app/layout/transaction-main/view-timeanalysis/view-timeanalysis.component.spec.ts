import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimeanalysisComponent } from './view-timeanalysis.component';

describe('ViewTimeanalysisComponent', () => {
  let component: ViewTimeanalysisComponent;
  let fixture: ComponentFixture<ViewTimeanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTimeanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTimeanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
