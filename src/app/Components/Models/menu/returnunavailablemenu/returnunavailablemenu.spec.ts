import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Returnunavailablemenu } from './returnunavailablemenu';

describe('Returnunavailablemenu', () => {
  let component: Returnunavailablemenu;
  let fixture: ComponentFixture<Returnunavailablemenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Returnunavailablemenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Returnunavailablemenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
