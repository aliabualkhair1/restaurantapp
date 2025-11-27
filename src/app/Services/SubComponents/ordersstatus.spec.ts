import { TestBed } from '@angular/core/testing';

import { Ordersstatus } from './ordersstatus';

describe('Ordersstatus', () => {
  let service: Ordersstatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ordersstatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
