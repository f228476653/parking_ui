import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownGarageMenuComponent } from './dropdown-garage-menu.component';

describe('DropdownGarageMenuComponent', () => {
  let component: DropdownGarageMenuComponent;
  let fixture: ComponentFixture<DropdownGarageMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownGarageMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownGarageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
