import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Getdeletedorderfeedback } from './getdeletedordersfeedback';


describe('Getdeletedreservationfeedback', () => {
  let component: Getdeletedorderfeedback;
  let fixture: ComponentFixture<Getdeletedorderfeedback>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getdeletedorderfeedback]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getdeletedorderfeedback);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
