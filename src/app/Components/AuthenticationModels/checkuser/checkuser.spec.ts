import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkuser } from './checkuser';

describe('Checkuser', () => {
  let component: Checkuser;
  let fixture: ComponentFixture<Checkuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Checkuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
