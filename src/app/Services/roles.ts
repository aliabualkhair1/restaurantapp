import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Roles {

  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());

  authStatus$() {
    return this.authStatus.asObservable();
  }

  setAuthStatus(value: boolean) {
    this.authStatus.next(value);
  }

  getToken(): string | null {
    return localStorage.getItem('access token');
  }

  private isExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      return !decoded.exp || Date.now() > decoded.exp * 1000;
    } catch {
      return true;
    }
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && !this.isExpired(token);
  }

  getRole(): string | null {
    const token = this.getToken();
    if (!token || this.isExpired(token)) return null;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.role || null;
    } catch {
      return null;
    }
  }

  hasRole(role: string): boolean {
    return this.getRole() === role;
  }

  isAdmin(): boolean {
    return this.hasRole('Admin');
  }

  isAdminAssistant(): boolean {
    return this.hasRole('AdminAssistant');
  }

  isStaff(): boolean {
    return this.hasRole('Staff');
  }

  isCustomer(): boolean {
    return this.hasRole('Customer');
  }
}
