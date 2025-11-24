import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userreservationscancelled } from './userreservationscancelled';

describe('Userreservationscancelled', () => {
  let component: Userreservationscancelled;
  let fixture: ComponentFixture<Userreservationscancelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userreservationscancelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userreservationscancelled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
