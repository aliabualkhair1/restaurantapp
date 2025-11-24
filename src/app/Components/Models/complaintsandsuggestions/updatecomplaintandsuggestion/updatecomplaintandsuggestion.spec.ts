import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatecomplaintandsuggestion } from './updatecomplaintandsuggestion';

describe('Updatecomplaintandsuggestion', () => {
  let component: Updatecomplaintandsuggestion;
  let fixture: ComponentFixture<Updatecomplaintandsuggestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatecomplaintandsuggestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatecomplaintandsuggestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
