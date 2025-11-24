import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Authentication } from '../../../Services/authentication';
import { Login } from '../../../Interfaces/Authentication/login';
import { Router, RouterLink } from '@angular/router';
import { Loginstatus } from '../../../Services/loginstatus';
import { Roles } from '../../../Services/roles';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './log-in.html',
  styleUrls: ['./log-in.css'],
})
export class LogIn {
  login!: Login;
  loginform: FormGroup;
  isdeleted: boolean = false;
  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(
    private authservice: Authentication,
    private router: Router,
    private status: Loginstatus,
    private roles: Roles
  ) {
    this.loginform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }

  submit() {
    if (this.loginform.valid) {
      this.login = {
        Email: this.loginform.value.email,
        Password: this.loginform.value.password
      };
      this.onlogin();
    }
  }

  onlogin() {
    this.authservice.LogIn(this.login).subscribe({
      next: (res: any) => {
        localStorage.setItem('access token', res.token);
        localStorage.setItem('expire date', res.expire);
        localStorage.setItem('refresh token', res.refreshtoken);

        this.apiMessage = "تم تسجيل الدخول بنجاح";
        this.apiMessageType = 'success';

        this.status.login();
        this.roles.setAuthStatus(true);
        setTimeout(() => this.router.navigate(['home']), 1000);
      },
      error: (err) => {
        if (err?.status === 410) {
          this.isdeleted = true;
          this.apiMessage = '';
        } else {
          this.isdeleted = false;
          this.apiMessage =err.error|| '';
          this.apiMessageType = 'error';
        }
            setTimeout(() => {
      this.apiMessage = '';
    }, 1000);
      }
    });
  }

  restoreaccount() {
    this.router.navigate(['restoreaccount']);
  }
}
