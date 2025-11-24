import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getdeleteuseritems } from './getdeleteuseritems';

describe('Getdeleteuseritems', () => {
  let component: Getdeleteuseritems;
  let fixture: ComponentFixture<Getdeleteuseritems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getdeleteuseritems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getdeleteuseritems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
