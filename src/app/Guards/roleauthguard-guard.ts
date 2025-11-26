export const roleauthguardGuard: CanActivateFn = (route, state) => {

  const roles = inject(Roles);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[];
  if (!roles.IsAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }
  const userRole = roles.getrole();
  if (userRole && allowedRoles.includes(userRole)) {
    return true;
  }
  router.navigate(['/home']);
  return false;
};
