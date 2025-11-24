import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderitems } from './orderitems';

describe('Orderitems', () => {
  let component: Orderitems;
  let fixture: ComponentFixture<Orderitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
