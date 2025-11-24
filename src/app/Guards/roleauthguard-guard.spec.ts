import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleauthguardGuard } from './roleauthguard-guard';

describe('roleauthguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleauthguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
