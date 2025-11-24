import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getusercomplaintsandsuggestions } from './getusercomplaintsandsuggestions';

describe('Getusercomplaintsandsuggestions', () => {
  let component: Getusercomplaintsandsuggestions;
  let fixture: ComponentFixture<Getusercomplaintsandsuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getusercomplaintsandsuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getusercomplaintsandsuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
