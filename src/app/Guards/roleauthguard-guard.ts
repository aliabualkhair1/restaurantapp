import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Roles } from '../Services/roles';
export const roleauthguardGuard: CanActivateFn = (route, state) => {
  const roles = inject(Roles);
  const router = inject(Router);
  const allowedRoles = route.data['roles'] as string[];
  if (!roles.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }
  const userRole = roles.getRole();
  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }
  router.navigate(['/home']);
  return false;
};
