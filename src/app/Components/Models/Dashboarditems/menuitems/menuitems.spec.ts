import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMenuitems } from './menuitems';

describe('Menuitems', () => {
  let component: AllMenuitems;
  let fixture: ComponentFixture<AllMenuitems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllMenuitems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllMenuitems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
