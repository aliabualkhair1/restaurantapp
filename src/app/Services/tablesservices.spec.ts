import { TestBed } from '@angular/core/testing';

import { Tablesservices } from './tablesservices';

describe('Tablesservices', () => {
  let service: Tablesservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tablesservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
