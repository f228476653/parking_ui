import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinvoiceConfigComponent } from './einvoice-config.component';

describe('EinvoiceConfigComponent', () => {
  let component: EinvoiceConfigComponent;
  let fixture: ComponentFixture<EinvoiceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinvoiceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinvoiceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
