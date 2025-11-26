import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class Roles {

  private authStatus = new BehaviorSubject<boolean>(this.IsAuthenticated());

  AuthStatus() {
    return this.authStatus.asObservable();
  }

  setAuthStatus(value: boolean) {
    this.authStatus.next(value);
  }

  gettoken(): string | null {
    return localStorage.getItem('access token');
  }

  private isExpired(token: string): boolean {
    try {
      const decoded: any = jwtDecode(token);
      if (!decoded.exp) return true;

      return Date.now() > decoded.exp * 1000;
    } catch {
      return true;
    }
  }

  IsAuthenticated(): boolean {
    const token = this.gettoken();
    return token !== null && !this.isExpired(token);
  }

  getrole(): string | null {
    const token = this.gettoken();
    if (!token || this.isExpired(token)) return null;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.role || null;
    } catch {
      return null;
    }
  }

  hasRole(role: string): boolean {
    return this.getrole() === role;
  }
  get isAdmin() {
    return this.hasRole('Admin');
  }

  get isAdminAssistant() {
    return this.hasRole('AdminAssistant');
  }

  get isStaff() {
    return this.hasRole('Staff');
  }

  get isCustomer() {
    return this.hasRole('Customer');
  }
}
