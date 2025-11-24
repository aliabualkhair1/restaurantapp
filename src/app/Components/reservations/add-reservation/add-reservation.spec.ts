import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservation } from './add-reservation';

describe('AddReservation', () => {
  let component: AddReservation;
  let fixture: ComponentFixture<AddReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReservation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
