import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getunavailablemenuitems } from './getunavailablemenuitems';

describe('Getunavailablemenuitems', () => {
  let component: Getunavailablemenuitems;
  let fixture: ComponentFixture<Getunavailablemenuitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getunavailablemenuitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getunavailablemenuitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
