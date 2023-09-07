import { TestBed } from '@angular/core/testing';

import { DbAbstractionLayerService } from './db-abstraction-layer.service';

describe('DbAbstractionLayerService', () => {
  let service: DbAbstractionLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbAbstractionLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
