import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userorderscancelled } from './userorderscancelled';

describe('Userorderscancelled', () => {
  let component: Userorderscancelled;
  let fixture: ComponentFixture<Userorderscancelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userorderscancelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userorderscancelled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
