import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ordersfeedback } from './ordersfeedback';

describe('Ordersfeedback', () => {
  let component: Ordersfeedback;
  let fixture: ComponentFixture<Ordersfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ordersfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ordersfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
