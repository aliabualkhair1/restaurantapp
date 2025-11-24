import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserOrderItems } from './userorderitems';


describe('Orderitems', () => {
  let component: UserOrderItems;
  let fixture: ComponentFixture<UserOrderItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOrderItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
