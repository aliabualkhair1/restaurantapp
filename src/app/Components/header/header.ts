import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Roles } from '../../Services/roles';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen = false;

  constructor(private roles: Roles, private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  LogOut() {
    localStorage.clear();
    this.roles.setAuthStatus(false);
    this.router.navigate(['home']);
  }

  get isAdmin() {
    return this.roles.isAdmin();
  }

  get isAdminAssistant() {
    return this.roles.isAdminAssistant();
  }

  get isStaff() {
    return this.roles.isStaff();
  }

  get isCustomer() {
    return this.roles.isCustomer();
  }

  get isAuth() {
    return this.roles.IsAuthenticated();
  }
}
