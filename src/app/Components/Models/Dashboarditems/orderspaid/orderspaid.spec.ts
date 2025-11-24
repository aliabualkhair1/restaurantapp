import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Orderspaid } from './orderspaid';

describe('Orderspaid', () => {
  let component: Orderspaid;
  let fixture: ComponentFixture<Orderspaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orderspaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Orderspaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
