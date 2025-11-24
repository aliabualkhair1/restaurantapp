import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCart } from './user-cart';

describe('UserCart', () => {
  let component: UserCart;
  let fixture: ComponentFixture<UserCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
