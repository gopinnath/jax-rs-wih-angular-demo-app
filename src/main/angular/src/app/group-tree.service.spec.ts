import { TestBed, inject } from '@angular/core/testing';

import { GroupTreeService } from './group-tree.service';

describe('GroupTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupTreeService]
    });
  });

  it('should be created', inject([GroupTreeService], (service: GroupTreeService) => {
    expect(service).toBeTruthy();
  }));
});
