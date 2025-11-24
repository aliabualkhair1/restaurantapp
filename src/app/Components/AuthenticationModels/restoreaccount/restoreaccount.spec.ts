import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoreaccount } from './restoreaccount';

describe('Restoreaccount', () => {
  let component: Restoreaccount;
  let fixture: ComponentFixture<Restoreaccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoreaccount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoreaccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
