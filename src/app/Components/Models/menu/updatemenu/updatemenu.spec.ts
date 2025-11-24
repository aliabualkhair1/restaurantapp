import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updatemenu } from './updatemenu';

describe('Updatemenu', () => {
  let component: Updatemenu;
  let fixture: ComponentFixture<Updatemenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updatemenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updatemenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
