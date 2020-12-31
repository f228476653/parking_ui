import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryGateDialogComponent } from './entry-gate-dialog.component';

describe('EntryGateDialogComponent', () => {
  let component: EntryGateDialogComponent;
  let fixture: ComponentFixture<EntryGateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryGateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryGateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
