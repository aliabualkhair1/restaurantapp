import { TestBed } from '@angular/core/testing';
import { Menuitemsservice } from './menuitemsservice';


describe('Menuitems', () => {
  let service: Menuitemsservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menuitemsservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
