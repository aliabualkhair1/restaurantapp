import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restorecategory } from './restorecategory';

describe('Restorecategory', () => {
  let component: Restorecategory;
  let fixture: ComponentFixture<Restorecategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restorecategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restorecategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
