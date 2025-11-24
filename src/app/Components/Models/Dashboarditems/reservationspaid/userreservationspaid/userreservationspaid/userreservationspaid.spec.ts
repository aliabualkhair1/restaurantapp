import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userreservationspaid } from './userreservationspaid';

describe('Userreservationspaid', () => {
  let component: Userreservationspaid;
  let fixture: ComponentFixture<Userreservationspaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userreservationspaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userreservationspaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
