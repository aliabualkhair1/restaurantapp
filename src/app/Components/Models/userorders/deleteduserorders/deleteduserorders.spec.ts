import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deleteduserorders } from './deleteduserorders';

describe('Deleteduserorders', () => {
  let component: Deleteduserorders;
  let fixture: ComponentFixture<Deleteduserorders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deleteduserorders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deleteduserorders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
