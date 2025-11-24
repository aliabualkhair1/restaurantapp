import { Component, OnInit } from '@angular/core';
import { ForgetPassword } from '../../../../Interfaces/Models/userdetails';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule, AbstractControl } from '@angular/forms';
import { Authentication } from '../../../../Services/authentication';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-changepassword',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './changepassword.html',
  styleUrls: ['./changepassword.css'],
})
export class Changepassword implements OnInit {
  reset!: ForgetPassword;
  formgroup: FormGroup;
  username: string = '';

  constructor(private http: Authentication, private router: Router, private routing: ActivatedRoute) {
    this.formgroup = new FormGroup({
      Password: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{6,20}$')
      ]),
      ConfirmPassword: new FormControl(null, [
        Validators.required
      ])
    }, { validators: this.passwordsMatch });
  }

  ngOnInit(): void {
    this.routing.queryParams.subscribe(params => {
      this.username = params['username'] || '';
    });
  }

  passwordsMatch(control: AbstractControl) {
    const group = control as FormGroup;
    const pass = group.get('Password')?.value;
    const confirm = group.get('ConfirmPassword')?.value;
    return pass === confirm ? null : { notMatching: true };
  }

  submit() {
    if (this.formgroup.invalid) return;

    this.reset = {
      username: this.username,
      password: this.formgroup.value.Password,
      confirmPassword: this.formgroup.value.ConfirmPassword
    };

    this.checkuserdetails();
  }

  get Password() { return this.formgroup.get('Password'); }
  get ConfirmPassword() { return this.formgroup.get('ConfirmPassword'); }

  checkuserdetails() {
    this.http.resetpassword(this.reset).subscribe({
      next: (res) => {
        alert(res);
        this.router.navigate(['login']);
      },
      error: (err) => {
        alert(err.error);
      }
    });
  }
}
