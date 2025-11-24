import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatemenuitem } from './updatemenuitem';

describe('Updatemenuitem', () => {
  let component: Updatemenuitem;
  let fixture: ComponentFixture<Updatemenuitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatemenuitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatemenuitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
