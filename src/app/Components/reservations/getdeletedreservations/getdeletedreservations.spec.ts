import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getdeletedreservations } from './getdeletedreservations';

describe('Getdeletedreservations', () => {
  let component: Getdeletedreservations;
  let fixture: ComponentFixture<Getdeletedreservations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getdeletedreservations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getdeletedreservations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
