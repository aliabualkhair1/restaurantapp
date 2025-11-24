import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatetable } from './updatetable';

describe('Updatetable', () => {
  let component: Updatetable;
  let fixture: ComponentFixture<Updatetable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatetable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatetable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
