import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSearchFieldComponent } from './shared-search-field.component';

describe('SharedSearchFieldComponent', () => {
  let component: SharedSearchFieldComponent;
  let fixture: ComponentFixture<SharedSearchFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedSearchFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
