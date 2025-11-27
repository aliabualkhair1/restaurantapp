import { TestBed } from '@angular/core/testing';

import { Menuitemsstatus } from './menuitemsstatus';

describe('Menuitemsstatus', () => {
  let service: Menuitemsstatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menuitemsstatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
