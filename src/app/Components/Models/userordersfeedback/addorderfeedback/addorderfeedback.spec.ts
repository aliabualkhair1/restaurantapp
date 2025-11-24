import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Addorderfeedback } from './addorderfeedback';


describe('Addreservationfeedback', () => {
  let component: Addorderfeedback;
  let fixture: ComponentFixture<Addorderfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addorderfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addorderfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
