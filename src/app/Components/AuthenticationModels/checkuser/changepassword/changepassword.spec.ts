import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Changepassword } from './changepassword';

describe('Changepassword', () => {
  let component: Changepassword;
  let fixture: ComponentFixture<Changepassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Changepassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Changepassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
