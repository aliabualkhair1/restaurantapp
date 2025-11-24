import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatequantity } from './updatequantity';

describe('Updatequantity', () => {
  let component: Updatequantity;
  let fixture: ComponentFixture<Updatequantity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatequantity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatequantity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
