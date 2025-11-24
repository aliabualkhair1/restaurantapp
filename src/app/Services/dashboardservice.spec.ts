import { TestBed } from '@angular/core/testing';

import { Dashboardservice } from './dashboardservice';

describe('Dashboardservice', () => {
  let service: Dashboardservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dashboardservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
