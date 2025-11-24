import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userreservationsfeedback } from './userreservationsfeedback';

describe('Userreservationsfeedback', () => {
  let component: Userreservationsfeedback;
  let fixture: ComponentFixture<Userreservationsfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userreservationsfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userreservationsfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
