import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactiontypeComponent } from './view-transactiontype.component';

describe('ViewTransactiontypeComponent', () => {
  let component: ViewTransactiontypeComponent;
  let fixture: ComponentFixture<ViewTransactiontypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTransactiontypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransactiontypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
