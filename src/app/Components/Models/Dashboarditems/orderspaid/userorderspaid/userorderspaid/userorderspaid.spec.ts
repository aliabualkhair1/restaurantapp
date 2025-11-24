import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userorderspaid } from './userorderspaid';

describe('Userorderspaid', () => {
  let component: Userorderspaid;
  let fixture: ComponentFixture<Userorderspaid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userorderspaid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userorderspaid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
