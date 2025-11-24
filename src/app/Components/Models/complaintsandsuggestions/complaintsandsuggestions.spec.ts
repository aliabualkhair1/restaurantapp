import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaintsandsuggestions } from './complaintsandsuggestions';

describe('Complaintsandsuggestions', () => {
  let component: Complaintsandsuggestions;
  let fixture: ComponentFixture<Complaintsandsuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complaintsandsuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complaintsandsuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
