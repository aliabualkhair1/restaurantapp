import { TestBed } from '@angular/core/testing';

import { Complaintandsuggestionservice } from './complaintandsuggestionservice';

describe('Complaintandsuggestion', () => {
  let service: Complaintandsuggestionservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Complaintandsuggestionservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
