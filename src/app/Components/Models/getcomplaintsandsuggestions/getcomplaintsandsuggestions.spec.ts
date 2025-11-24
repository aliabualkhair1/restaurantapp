import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getcomplaintsandsuggestions } from './getcomplaintsandsuggestions';

describe('Getcomplaintsandsuggestions', () => {
  let component: Getcomplaintsandsuggestions;
  let fixture: ComponentFixture<Getcomplaintsandsuggestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getcomplaintsandsuggestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getcomplaintsandsuggestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
