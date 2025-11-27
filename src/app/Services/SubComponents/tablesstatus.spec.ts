import { TestBed } from '@angular/core/testing';

import { Tablesstatus } from './tablesstatus';

describe('Tablesstatus', () => {
  let service: Tablesstatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tablesstatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
