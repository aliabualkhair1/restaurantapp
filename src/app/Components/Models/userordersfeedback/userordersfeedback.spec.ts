import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserOrdersFeedback } from './userordersfeedback';


describe('Reservationsfeedback', () => {
  let component: UserOrdersFeedback;
  let fixture: ComponentFixture<UserOrdersFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserOrdersFeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrdersFeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
