import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Updateuserdetails } from './updateuserdetails';

describe('Updateuserdetails', () => {
  let component: Updateuserdetails;
  let fixture: ComponentFixture<Updateuserdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Updateuserdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Updateuserdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
