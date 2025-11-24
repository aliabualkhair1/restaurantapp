import { TestBed } from '@angular/core/testing';

import { Loginstatus } from './loginstatus';

describe('Loginstatus', () => {
  let service: Loginstatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Loginstatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
