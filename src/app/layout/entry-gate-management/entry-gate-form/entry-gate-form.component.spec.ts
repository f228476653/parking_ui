import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGateFormComponent } from './entry-gate-form.component';

describe('EntryGateFormComponent', () => {
  let component: EntryGateFormComponent;
  let fixture: ComponentFixture<EntryGateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryGateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
