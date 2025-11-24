import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { Authentication } from '../../../Services/authentication';
import { Register } from '../../../Interfaces/Authentication/register';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './registration.html',
  styleUrls: ['./registration.css'],
})
export class Registration {
  register!: Register;
  reactiveform: FormGroup;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Authentication, private router: Router) {
   this.reactiveform = new FormGroup({
  FirstName: new FormControl("", [
    Validators.required, 
    Validators.minLength(3), 
    Validators.maxLength(12),
    Validators.pattern("^[a-zA-Z]+$")
  ]),
  LastName: new FormControl("", [
    Validators.required, 
    Validators.minLength(3), 
    Validators.maxLength(12),
    Validators.pattern("^[a-zA-Z]+$") 
  ]),
  PhoneNumber: new FormControl("", [
    Validators.required, 
    Validators.minLength(11), 
    Validators.maxLength(11), 
Validators.pattern('^(010|011|012|015)[0-9]{8}$')
  ]),
  NationalId: new FormControl("", [
    Validators.required, 
    Validators.minLength(14), 
    Validators.maxLength(14), 
    Validators.pattern("^[0-9]*$") 
  ]),
  Username: new FormControl("", [
    Validators.required, 
    Validators.minLength(6), 
    Validators.maxLength(20), 
    Validators.pattern("^[a-zA-Z0-9_]+$") 
  ]),
  Email: new FormControl("", [
    Validators.required, 
    Validators.email
  ]),
  Password: new FormControl("", [
    Validators.required, 
    Validators.minLength(6), 
    Validators.maxLength(20)
  ]),
  ConfirmPassword: new FormControl("", [
    Validators.required, 
    Validators.minLength(6), 
    Validators.maxLength(20)
  ])
}, { validators: this.passwordsMatch });
  }

  passwordsMatch(control: AbstractControl) {
    const pass = control.get('Password')?.value;
    const confirm = control.get('ConfirmPassword')?.value;
    return pass === confirm ? null : { notMatching: true };
  }

  onsubmit() {
    this.reactiveform.markAllAsTouched();
    if (this.reactiveform.invalid) return;
    this.register = { ...this.reactiveform.value };
    this.registration();
  }

  get FirstName() { return this.reactiveform.get('FirstName'); }
  get LastName() { return this.reactiveform.get('LastName'); }
  get PhoneNumber() { return this.reactiveform.get('PhoneNumber'); }
  get NationalId() { return this.reactiveform.get('NationalId'); }
  get Username() { return this.reactiveform.get('Username'); }
  get Email() { return this.reactiveform.get('Email'); }
  get Password() { return this.reactiveform.get('Password'); }
  get ConfirmPassword() { return this.reactiveform.get('ConfirmPassword'); }

  registration() {
    this.http.Register(this.register).subscribe({
      next: (res: string) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigateByUrl('/login');
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء التسجيل';
        this.apiMessageType = 'error';
        setTimeout(() => {
          this.apiMessage = '';
        }, 5000);
      }
    });
  }
}
