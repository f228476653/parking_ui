import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGateManagementComponent } from './entry-gate-management.component';

describe('EntryGateManagementComponent', () => {
  let component: EntryGateManagementComponent;
  let fixture: ComponentFixture<EntryGateManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryGateManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
