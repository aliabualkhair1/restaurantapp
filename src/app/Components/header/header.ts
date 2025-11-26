import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Roles } from '../../Services/roles';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;

  constructor(private roles: Roles, private router: Router) {}

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.contant') && !target.closest('.menu')) {
      this.isMenuOpen = false;
    }
  }

  onItemClick() {
    this.isMenuOpen = false;
  }

  LogOut() {
    localStorage.removeItem('access token');
    localStorage.removeItem('refresh token');
    localStorage.removeItem('expire date');
    this.roles.setAuthStatus(false);
    this.router.navigate(['/home']);
    this.isMenuOpen = false;
  }

  get isAdmin() {
    return this.roles.isAdmin;
  }

  get isAdminAssistant() {
    return this.roles.isAdminAssistant;
  }

  get isStaff() {
    return this.roles.isStaff;
  }

  get isCustomer() {
    return this.roles.isCustomer;
  }

  get isAuth() {
    return this.roles.isAuthenticated();
  }
}
