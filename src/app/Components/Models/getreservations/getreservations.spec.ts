import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getreservations } from './getreservations';

describe('Getreservations', () => {
  let component: Getreservations;
  let fixture: ComponentFixture<Getreservations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getreservations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getreservations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
