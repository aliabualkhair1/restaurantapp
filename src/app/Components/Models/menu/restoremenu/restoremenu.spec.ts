import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoremenu } from './restoremenu';

describe('Restoremenu', () => {
  let component: Restoremenu;
  let fixture: ComponentFixture<Restoremenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoremenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoremenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
