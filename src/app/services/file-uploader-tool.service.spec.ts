import { TestBed, inject } from '@angular/core/testing';

import { FileUploaderToolService } from './file-uploader-tool.service';

describe('FileUploaderToolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileUploaderToolService]
    });
  });

  it('should be created', inject([FileUploaderToolService], (service: FileUploaderToolService) => {
    expect(service).toBeTruthy();
  }));
});
