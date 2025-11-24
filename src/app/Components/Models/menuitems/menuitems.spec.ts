import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menuitems } from './menuitems';

describe('Menuitems', () => {
  let component: Menuitems;
  let fixture: ComponentFixture<Menuitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menuitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menuitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
