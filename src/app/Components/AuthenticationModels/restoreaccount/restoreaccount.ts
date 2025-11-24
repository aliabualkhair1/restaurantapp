import { Component } from "@angular/core";
import { RestoreUser } from "../../../Interfaces/Models/userdetails";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Userinfoservice } from "../../../Services/userinfoservice";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-restoreaccount',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './restoreaccount.html',
  styleUrls: ['./restoreaccount.css'],
})
export class Restoreaccount {
  restore!: RestoreUser;
  formgroup!: FormGroup;

  apiMessage: string = '';
  apiMessageType: 'success' | 'error' = 'success';

  constructor(private http: Userinfoservice, private router: Router) {
    this.formgroup = new FormGroup({
      NationalId: new FormControl("", [
        Validators.required, 
        Validators.pattern('^[0-9]{14}$')
      ]),
      UserName: new FormControl("", [
        Validators.required, 
        Validators.pattern('^[A-Za-z0-9_]+$')
      ]),
      Email: new FormControl("", [
        Validators.required, 
        Validators.email
      ]),
      Password: new FormControl("", [
        Validators.required, 
        Validators.minLength(6)
      ])
    });
  }

  get NationalId() { return this.formgroup.get('NationalId'); }
  get UserName() { return this.formgroup.get('UserName'); }
  get Email() { return this.formgroup.get('Email'); }
  get Password() { return this.formgroup.get('Password'); }

  submit() {
    this.formgroup.markAllAsTouched();
    if (this.formgroup.invalid) return;

    this.restore = {
      nationalId: this.formgroup.value.NationalId,
      username: this.formgroup.value.UserName,
      email: this.formgroup.value.Email,
      password: this.formgroup.value.Password
    };
    this.restoreuserdetails();
  }

  restoreuserdetails() {
    this.http.restoreuser(this.restore).subscribe({
      next: (res) => {
        this.apiMessage = res;
        this.apiMessageType = 'success';
        setTimeout(() => {
          this.apiMessage = '';
          this.router.navigate(['login']);
        }, 1000);
      },
      error: (err) => {
        this.apiMessage = err.error || 'حدث خطأ أثناء استعادة الحساب';
        this.apiMessageType = 'error';
        setTimeout(() => this.apiMessage = '', 5000);
      }
    });
  }
}
