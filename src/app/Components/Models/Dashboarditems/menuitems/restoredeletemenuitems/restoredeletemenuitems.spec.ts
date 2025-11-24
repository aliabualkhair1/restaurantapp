import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoredeletemenuitems } from './restoredeletemenuitems';

describe('Restoredeletemenuitems', () => {
  let component: Restoredeletemenuitems;
  let fixture: ComponentFixture<Restoredeletemenuitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoredeletemenuitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoredeletemenuitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
