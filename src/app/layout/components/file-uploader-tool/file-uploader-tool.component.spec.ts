import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderToolComponent } from './file-uploader-tool.component';

describe('FileUploaderToolComponent', () => {
  let component: FileUploaderToolComponent;
  let fixture: ComponentFixture<FileUploaderToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploaderToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
