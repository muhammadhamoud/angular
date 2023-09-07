import { TestBed } from '@angular/core/testing';

import { SessionFlowService } from './session-flow.service';

describe('SessionFlowService', () => {
  let service: SessionFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
