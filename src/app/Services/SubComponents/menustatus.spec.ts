import { TestBed } from '@angular/core/testing';

import { Menustatus } from './menustatus';

describe('Menustatus', () => {
  let service: Menustatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menustatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
