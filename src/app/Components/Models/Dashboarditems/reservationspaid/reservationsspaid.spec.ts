import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservationsspaid } from './reservationsspaid';

describe('Reservationsspaid', () => {
  let component: Reservationsspaid;
  let fixture: ComponentFixture<Reservationsspaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reservationsspaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservationsspaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
