import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getdeletedreservationfeedback } from './getdeletedreservationfeedback';

describe('Getdeletedreservationfeedback', () => {
  let component: Getdeletedreservationfeedback;
  let fixture: ComponentFixture<Getdeletedreservationfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getdeletedreservationfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getdeletedreservationfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
