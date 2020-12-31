import { TestBed, inject } from '@angular/core/testing';

import { GarageGroupService } from './garage-group.service';

describe('GarageGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarageGroupService]
    });
  });

  it('should be created', inject([GarageGroupService], (service: GarageGroupService) => {
    expect(service).toBeTruthy();
  }));
});
