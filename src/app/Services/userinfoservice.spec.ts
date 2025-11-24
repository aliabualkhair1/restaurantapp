import { TestBed } from '@angular/core/testing';

import { Userinfoservice } from './userinfoservice';

describe('Userinfoservice', () => {
  let service: Userinfoservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userinfoservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
