import { TestBed } from '@angular/core/testing';

import { ReserationServices } from './reseration-services';

describe('ReserationServices', () => {
  let service: ReserationServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserationServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
