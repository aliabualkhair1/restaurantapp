import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, switchMap, throwError, BehaviorSubject, filter, take } from 'rxjs';
import { inject } from '@angular/core';
import { Authentication } from '../Services/authentication';
import { Roles } from '../Services/roles';

let isRefreshing = false;
let refreshSubject = new BehaviorSubject<string | null>(null);

export const authenticationinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Authentication);
  const roles = inject(Roles);

  const token = localStorage.getItem('access token');

  const newReq = req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  });

  return next(newReq).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 401 && !req.url.includes('refreshtoken')) {

        if (!isRefreshing) {
          isRefreshing = true;

          return auth.RefreshToken({ token: localStorage.getItem('refresh token')! }).pipe(
            switchMap(res => {
              isRefreshing = false;
              refreshSubject.next(res.token);

              localStorage.setItem('access token', res.token);
              localStorage.setItem('refresh token', res.refreshtoken);
              localStorage.setItem('expire date', res.expire);

              roles.setAuthStatus(true);

              const retryReq = req.clone({
                setHeaders: { Authorization: `Bearer ${res.token}` }
              });

              return next(retryReq);
            }),
            catchError(err => {
              isRefreshing = false;
              auth.LogOut();
              return throwError(() => err);
            })
          );

        } else {
          return refreshSubject.pipe(
            filter(t => t !== null),
            take(1),
            switchMap(token => {
              const retryReq = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
              });

              return next(retryReq);
            })
          );
        }
      }

      return throwError(() => error);
    })
  );
};
