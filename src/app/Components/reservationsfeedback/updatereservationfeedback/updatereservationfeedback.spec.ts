import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatereservationfeedback } from './updatereservationfeedback';

describe('Updatereservationfeedback', () => {
  let component: Updatereservationfeedback;
  let fixture: ComponentFixture<Updatereservationfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatereservationfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatereservationfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
