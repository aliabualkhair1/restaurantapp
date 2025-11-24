import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Userinfoservice } from '../../../Services/userinfoservice';
import { ResetPass } from '../../../Interfaces/Models/userdetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.html',
  styleUrls: ['./reset-password.css'],
})
export class ResetPassword {
  Resetpassword!: ResetPass;
  Form: FormGroup;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Userinfoservice, private router: Router) {
    this.Form = new FormGroup({
      CurrentPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      NewPassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      ConfirmPassword: new FormControl("", [Validators.required])
    }, { validators: this.passwordsMatch });
  }

  get currentpassword() { return this.Form.get('CurrentPassword'); }
  get newpassword() { return this.Form.get('NewPassword'); }
  get confirmnewpassword() { return this.Form.get('ConfirmPassword'); }

  passwordsMatch(control: AbstractControl) {
    const newPass = control.get('NewPassword')?.value;
    const confirm = control.get('ConfirmPassword')?.value;
    return newPass === confirm ? null : { passwordMismatch: true };
  }

  submit() {
    this.Form.markAllAsTouched();
    if (this.Form.invalid) return;

    const { CurrentPassword, NewPassword, ConfirmPassword } = this.Form.value;
    this.Resetpassword = { CurrentPassword, NewPassword, ConfirmPassword };
    this.reset();
  }

  reset() {
    this.http.resetuserpassword(this.Resetpassword).subscribe({
      next: (res: string) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
        this.router.navigate(['login'])
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء إعادة تعيين كلمة المرور';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
