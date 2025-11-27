import { TestBed } from '@angular/core/testing';

import { Complaintsandsuggestionsstatus } from './complaintsandsuggestionsstatus';

describe('Complaintsandsuggestionsstatus', () => {
  let service: Complaintsandsuggestionsstatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Complaintsandsuggestionsstatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
