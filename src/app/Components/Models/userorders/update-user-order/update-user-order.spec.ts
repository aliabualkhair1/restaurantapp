import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserOrder } from './update-user-order';

describe('UpdateUserOrder', () => {
  let component: UpdateUserOrder;
  let fixture: ComponentFixture<UpdateUserOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateUserOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
