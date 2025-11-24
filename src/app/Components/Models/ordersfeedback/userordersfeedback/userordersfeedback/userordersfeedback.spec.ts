import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userordersfeedback } from './userordersfeedback';

describe('Userordersfeedback', () => {
  let component: Userordersfeedback;
  let fixture: ComponentFixture<Userordersfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userordersfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userordersfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
