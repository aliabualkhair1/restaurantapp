import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatereservation } from './updatereservation';

describe('Updatereservation', () => {
  let component: Updatereservation;
  let fixture: ComponentFixture<Updatereservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatereservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatereservation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
