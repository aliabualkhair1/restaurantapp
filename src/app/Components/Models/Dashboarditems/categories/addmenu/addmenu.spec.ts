import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmenu } from './addmenu';

describe('Addmenu', () => {
  let component: Addmenu;
  let fixture: ComponentFixture<Addmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
