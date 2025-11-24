import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userreservations } from './userreservations';

describe('Userreservations', () => {
  let component: Userreservations;
  let fixture: ComponentFixture<Userreservations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userreservations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userreservations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
