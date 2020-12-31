import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyViewDialogComponent } from './key-view-dialog.component';

describe('KeyViewDialogComponent', () => {
  let component: KeyViewDialogComponent;
  let fixture: ComponentFixture<KeyViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
