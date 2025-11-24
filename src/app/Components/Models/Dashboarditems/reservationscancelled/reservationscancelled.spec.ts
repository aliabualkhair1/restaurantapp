import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservationscancelled } from './reservationscancelled';

describe('Reservationscancelled', () => {
  let component: Reservationscancelled;
  let fixture: ComponentFixture<Reservationscancelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reservationscancelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservationscancelled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
