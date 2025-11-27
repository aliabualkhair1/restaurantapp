import { TestBed } from '@angular/core/testing';

import { Categorystatus } from './categorystatus';

describe('Categorystatus', () => {
  let service: Categorystatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Categorystatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
