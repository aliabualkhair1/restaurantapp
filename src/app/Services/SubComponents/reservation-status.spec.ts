import { TestBed } from '@angular/core/testing';

import { ReservationStatus } from './reservation-status';

describe('ReservationStatus', () => {
  let service: ReservationStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationStatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
