import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderscancelled } from './orderscancelled';

describe('Orderscancelled', () => {
  let component: Orderscancelled;
  let fixture: ComponentFixture<Orderscancelled>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderscancelled]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderscancelled);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
