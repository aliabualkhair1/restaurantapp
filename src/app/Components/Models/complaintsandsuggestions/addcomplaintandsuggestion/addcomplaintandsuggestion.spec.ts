import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcomplaintandsuggestion } from './addcomplaintandsuggestion';

describe('Addcomplaintandsuggestion', () => {
  let component: Addcomplaintandsuggestion;
  let fixture: ComponentFixture<Addcomplaintandsuggestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addcomplaintandsuggestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addcomplaintandsuggestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
