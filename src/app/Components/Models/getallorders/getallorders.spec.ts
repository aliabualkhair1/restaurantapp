import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Getallorders } from './getallorders';

describe('Getallorders', () => {
  let component: Getallorders;
  let fixture: ComponentFixture<Getallorders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Getallorders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Getallorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
