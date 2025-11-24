import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatecategory } from './updatecategory';

describe('Updatecategory', () => {
  let component: Updatecategory;
  let fixture: ComponentFixture<Updatecategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatecategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatecategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
