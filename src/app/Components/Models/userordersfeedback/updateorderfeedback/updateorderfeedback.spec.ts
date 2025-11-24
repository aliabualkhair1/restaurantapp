import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderFeedback} from './updateorderfeedback';

describe('Updatereservationfeedback', () => {
  let component: UpdateOrderFeedback;
  let fixture: ComponentFixture<UpdateOrderFeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOrderFeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrderFeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
