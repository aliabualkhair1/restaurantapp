import { TestBed } from '@angular/core/testing';

import { Orderservices } from './orderservices';

describe('Orderservices', () => {
  let service: Orderservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orderservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
