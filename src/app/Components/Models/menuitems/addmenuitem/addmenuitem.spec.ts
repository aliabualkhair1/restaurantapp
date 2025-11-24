import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addmenuitem } from './addmenuitem';

describe('Addmenuitem', () => {
  let component: Addmenuitem;
  let fixture: ComponentFixture<Addmenuitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addmenuitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addmenuitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
