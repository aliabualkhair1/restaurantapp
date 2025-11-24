import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtable } from './addtable';

describe('Addtable', () => {
  let component: Addtable;
  let fixture: ComponentFixture<Addtable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addtable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addtable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
