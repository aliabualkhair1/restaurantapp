import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomersQuestions } from './get-customers-questions';

describe('GetCustomersQuestions', () => {
  let component: GetCustomersQuestions;
  let fixture: ComponentFixture<GetCustomersQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCustomersQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCustomersQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
