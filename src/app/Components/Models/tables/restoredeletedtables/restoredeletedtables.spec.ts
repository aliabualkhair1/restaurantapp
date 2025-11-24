import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoredeletedtables } from './restoredeletedtables';

describe('Restoredeletedtables', () => {
  let component: Restoredeletedtables;
  let fixture: ComponentFixture<Restoredeletedtables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoredeletedtables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoredeletedtables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
