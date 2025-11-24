import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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

  getrole(): string | null {
    const token = this.gettoken();
    if (!token) return null;
    try {
      const decode: any = jwtDecode(token);
      return decode.role;
    } catch {
      return null;
    }
  }

  isAdmin(): boolean {
    return this.getrole() === 'Admin';
  }

  isAdminAssistant(): boolean {
    return this.getrole() === 'AdminAssistant';
  }

  isStaff(): boolean {
    return this.getrole() === 'Staff';
  }

  isCustomer(): boolean {
    return this.getrole() === 'Customer';
  }

  IsAuthenticated(): boolean {
    return !!this.gettoken();
  }
}
