import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservationsfeedback } from './reservationsfeedback';

describe('Reservationsfeedback', () => {
  let component: Reservationsfeedback;
  let fixture: ComponentFixture<Reservationsfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reservationsfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservationsfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
