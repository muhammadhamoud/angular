import { TestBed } from '@angular/core/testing';

import { AddPropertyTypeService } from './add-property-type.service';

describe('AddPropertyTypeService', () => {
  let service: AddPropertyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPropertyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
