import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { Roles } from "../Services/roles";

export const roleauthguardGuard: CanActivateFn = (route, state) => {
  const roles = inject(Roles);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[];
  const userRole = roles.getrole();
  if (!localStorage.getItem("refresh token")) {
    router.navigate(['/login']);
    return false;
  }

  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};
