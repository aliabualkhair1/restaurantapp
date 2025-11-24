import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addreservationfeedback } from './addreservationfeedback';

describe('Addreservationfeedback', () => {
  let component: Addreservationfeedback;
  let fixture: ComponentFixture<Addreservationfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addreservationfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addreservationfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
