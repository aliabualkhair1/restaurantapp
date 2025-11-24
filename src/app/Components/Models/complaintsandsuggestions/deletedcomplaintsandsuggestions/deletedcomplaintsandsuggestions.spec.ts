import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deletedcomplaintsandsuggestions } from './deletedcomplaintsandsuggestions';

describe('Deletedcomplaintsandsuggestions', () => {
  let component: Deletedcomplaintsandsuggestions;
  let fixture: ComponentFixture<Deletedcomplaintsandsuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deletedcomplaintsandsuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deletedcomplaintsandsuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
